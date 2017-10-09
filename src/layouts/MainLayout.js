import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col, Button } from 'antd';
import scrollToElement from 'scroll-to-element';
import { Link } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

class MainLayout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuCollapsed: true
        }
    }

    toggleMenu = () => {
        if (this.state.isMenuCollapsed) {
            this.setState({
                isMenuCollapsed: false
            });
        } else {
            this.setState({
                isMenuCollapsed: true
            });
        }
    }

    menuClickHandler = (e) => {
        if (e.key) {
            this.toggleMenu();
            if(e.key !== 'faq'){
                scrollToElement('#' + e.key);
            }
        }
    }

    render() {
        return (
            <Layout>
                <Header >
                    <Row>
                        <Col xs={23} md={6}>
                            <Link to={`/`}><img className="logo" src="/img/specter-one-logo.jpg"/></Link>
                        </Col>
                        <Col lg={18} >
                            <Menu mode="horizontal" onClick={this.menuClickHandler}>
                                <Menu.Item key="collection"><Link to={`/collection`}>COLLECTION</Link></Menu.Item>
                                <Menu.Item key="tier-list"><Link to={`/`}>PRICING</Link></Menu.Item>
                                <Menu.Item key="faq"><Link to={`/faq`}>HOW IT WORKS</Link></Menu.Item>
                                <Menu.Item key="contact">CONTACT</Menu.Item>
                                <Menu.Item key="apply"><Button>JOIN THE WAITLIST</Button></Menu.Item>
                                {/* <Menu.Item key="5">LOGIN</Menu.Item> */}
                            </Menu>
                        </Col>
                        <Col xs={1} className="cus-collapsed-menu-icon">
                            <Icon type="menu-fold" onClick={this.toggleMenu} />
                        </Col>
                    </Row>
                    {!this.state.isMenuCollapsed && <Menu className="cus-collapsed-menu"
                        onClick={this.menuClickHandler} >
                        <Menu.Item key="apply">APPLY</Menu.Item>
                        <Menu.Item key="collection"><Link to={`/collection`}>COLLECTION</Link></Menu.Item>
                        <Menu.Item key="tier-list">PRICING</Menu.Item>
                        <Menu.Item key="faq"><Link to={`/faq`}>HOW IT WORKS</Link></Menu.Item>
                        <Menu.Item key="contact">CONTACT</Menu.Item>
                        {/* <Menu.Item key="5">LOGIN</Menu.Item> */}
                    </Menu>}
                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer id="contact">
                    <Row type="flex" justify="space-between">
                        <Col xs={24} md={4}>CONTACT OUR CONCIERGE</Col>
                        <Col xs={24} md={5}>
                            <span style={{ marginRight: '2em' }}><Icon type="mail" /> concierge@specterone.com</span>
                            <a href="https://www.facebook.com/SpecterOneWatches/"><i className="fa fa-facebook-official" aria-hidden="true" style={{marginRight: '2em', color:'white'}}></i></a>  
                            <a href="https://www.instagram.com/specteronewatches/"><i className="fa fa-instagram" aria-hidden="true"  style={{color:'white'}}></i></a>
                            {/* <Icon type="phone" /> +65-1234-1234 */}
                            </Col>
                    </Row>
                </Footer>
            </Layout>
        );
    }
}

export default MainLayout;