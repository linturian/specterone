import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col, Button } from 'antd';
import scrollToElement from 'scroll-to-element';
import { Link, withRouter } from "react-router-dom";
import Router from './routers/Router';
import { authUser, signOutUser } from "./libs/awsLib";
const { Header, Footer, Content } = Layout;


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuCollapsed: true,
            isAuthenticated: false,
            isAuthenticating: true,
            currentUser: null
        }
        //Intercomm initialize
        window.Intercom("boot", {
            app_id: "tyhfvrmy"
        });
    }

    async componentDidMount() {
        try {
            const user = await authUser()
            if (user != null) {
                this.userHasAuthenticated(true, user);
            }
        }
        catch (e) {
            alert(e);
        }

        this.setState({ isAuthenticating: false });
    }

    userHasAuthenticated = (authenticated, user) => {
        this.setState({ isAuthenticated: authenticated, user: user });
    }

    toggleMenu = () => {
        if (this.state.isMenuCollapsed) {
            this.setState({ isMenuCollapsed: false });
        } else {
            this.setState({ isMenuCollapsed: true });
        }
    }

    menuClickHandler = (e) => { }

    collapsedMenuClickHandler = (e) => {
        this.toggleMenu();
        this.menuClickHandler(e);
    }

    logoutHandler = (e) => {
        signOutUser();
        this.userHasAuthenticated(false, null);
        this.props.history.push("/");
    }



    render() {
        window.Intercom("update");
        
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            username: this.state.username,
            userHasAuthenticated: this.userHasAuthenticated,
        };

        return (
            !this.state.isAuthenticating &&
            <Layout>
                <Header>
                    {/* Horizontal top menu */}
                    <Row className="dark-theme">
                        <Col xs={22} md={6}>
                            <Link to={`/`}><img className="logo" src="/img/specter-one-logo.jpg" alt="Specter One logo" /></Link>
                        </Col>
                        <Col lg={18} >
                            {this.state.isAuthenticated ? <AuthenticatedMenu clickHandler={this.logoutHandler} /> : <MainMenu clickHander={this.menuClickHandler} mode="horizontal" />}
                        </Col>
                        <Col xs={2}>
                            {this.state.isMenuCollapsed && <Icon type="bars" className="burger-menu-icon" onClick={this.toggleMenu} />}
                        </Col>
                    </Row>

                    {/* Right side menu */}
                    <div className={"cus-collapsed-menu " + (this.state.isMenuCollapsed ? "" : "visible")}>
                        <a className="close-button" onClick={this.toggleMenu}>&times;</a>
                        <MainMenu clickHander={this.collapsedMenuClickHandler} mode="inline" />
                    </div>
                </Header>
                <Content>
                    <Router childProps={childProps} />
                </Content>
                <Footer id="contact" className="dark-theme">
                    <Row type="flex">
                        <Col xs={24} md={6}>
                            <p>CONTACT OUR CONCIERGE</p>
                            <p style={{ marginRight: '2em' }}><Icon type="mail" /> concierge@specterone.com</p>
                        </Col>
                        <Col xs={24} md={6}>
                            <p>CONNECT WITH US</p>
                            <a href="https://www.facebook.com/SpecterOneWatches/"><i className="fa fa-facebook-official" aria-hidden="true" style={{ color: 'white' }}></i></a>
                            <a href="https://www.instagram.com/specteronewatches/"><i className="fa fa-instagram" aria-hidden="true" style={{ marginLeft: '1em', color: 'white' }}></i></a>
                        </Col>
                        <Col xs={24} >
                            <br />
                            <p>© 2017 Specter One | <Link to={`/privacy-policy`}>Privacy Policy</Link></p>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        );
    }
}

function AuthenticatedMenu(props) {
    return (
        <Menu mode="horizontal" theme="dark" onClick={props.clickHandler}>
            <Menu.Item key="logout">LOG OUT</Menu.Item>
        </Menu>
    );
}

function MainMenu(props) {
    return (
        <Menu mode={props.mode} theme="dark" onClick={props.clickHandler}>
            <Menu.Item key="collection"><Link to={`/collection`}>COLLECTION</Link></Menu.Item>
            <Menu.Item key="faq"><Link to={`/faq`}>HOW IT WORKS</Link></Menu.Item>
            {/* <Menu.Item key="contact"><Link to={`/consignment`}>CONSIGNMENT</Link></Menu.Item> */}
            <Menu.Item key="login"><Link to={`/login`}>LOGIN</Link></Menu.Item>
            <Menu.Item key="apply">
                <form action="/register" method="get" >
                    <Button htmlType="submit">
                        JOIN THE WAITLIST
                    </Button>
                </form>
            </Menu.Item>
        </Menu>
    );
}


export default withRouter(App);