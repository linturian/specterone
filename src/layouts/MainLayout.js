import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col, Button } from 'antd';
import scrollToElement from 'scroll-to-element';
import { Link } from 'react-router-dom';
import { slide as SlideMenu } from 'react-burger-menu';
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
            if (e.key == 'tier-list' || e.key == 'contact') {
                scrollToElement('#' + e.key);
            }
        }
    }

    render() {
        return (
            <Layout>
                <Header >
                    <Row>
                        <Col xs={22} md={6}>
                            <Link to={`/`}><img className="logo" src="/img/specter-one-logo.jpg" /></Link>
                        </Col>
                        <Col lg={18} >
                            <Menu mode="horizontal" onClick={this.menuClickHandler}>
                                <Menu.Item key="collection"><Link to={`/collection`}>COLLECTION</Link></Menu.Item>
                                {/* <Menu.Item key="tier-list"><Link to={`/`}>PRICING</Link></Menu.Item> */}
                                <Menu.Item key="faq"><Link to={`/faq`}>HOW IT WORKS</Link></Menu.Item>
                                <Menu.Item key="contact">CONTACT</Menu.Item>
                                <Menu.Item key="apply">
                                    <form action="//specterone.us15.list-manage.com/subscribe/post?u=3b5936bf6be301a299947c2f3&amp;id=abf3b3e242" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                        <div style={{ position: 'absolute', left: '-5000px', }} aria-hidden="true">
                                            <input type="text" name="b_3b5936bf6be301a299947c2f3_abf3b3e242" tabIndex="-1" value="" />
                                        </div>
                                        <div className="clear">
                                            <Button
                                                htmlType="submit"
                                                name="subscribe"
                                                id="mc-embedded-subscribe">
                                                JOIN THE WAITLIST
                                        </Button>
                                        </div>
                                    </form>
                                </Menu.Item>
                            </Menu>
                        </Col>
                        <Col xs={2} className="burger-menu-icon">
                            {this.state.isMenuCollapsed && <Icon type="bars" style={{ fontSize: '2em', lineHeight: '63px' }} onClick={this.toggleMenu} />}
                        </Col>
                    </Row>

                    <div className={"cus-collapsed-menu " + (this.state.isMenuCollapsed ? "" : "visible")}>
                        <a href="javascript:void(0)" className="close-button" onClick={this.toggleMenu}>&times;</a>
                        <Menu mode="inline" onClick={this.menuClickHandler}>
                            <Menu.Item key="collection"><Link to={`/collection`}>COLLECTION</Link></Menu.Item>
                            {/* <Menu.Item key="tier-list"><Link to={`/`}>PRICING</Link></Menu.Item> */}
                            <Menu.Item key="faq"><Link to={`/faq`}>HOW IT WORKS</Link></Menu.Item>
                            <Menu.Item key="contact"><Link to={`/`}>CONTACT</Link></Menu.Item>
                            <Menu.Item key="apply">
                                <form action="//specterone.us15.list-manage.com/subscribe/post?u=3b5936bf6be301a299947c2f3&amp;id=abf3b3e242" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                                    <div style={{ position: 'absolute', left: '-5000px', }} aria-hidden="true">
                                        <input type="text" name="b_3b5936bf6be301a299947c2f3_abf3b3e242" tabIndex="-1" value="" />
                                    </div>
                                    <div className="clear">
                                        <Button
                                            htmlType="submit"
                                            name="subscribe"
                                            id="mc-embedded-subscribe">
                                            JOIN THE WAITLIST
                                        </Button>
                                    </div>
                                </form>
                            </Menu.Item>
                        </Menu>
                    </div>

                </Header>
                <Content>
                    {this.props.children}
                </Content>
                <Footer id="contact">
                    <Row type="flex" justify="space-between">
                        <Col xs={24} sm={7}>CONTACT OUR CONCIERGE</Col>
                        <Col xs={24} sm={11} md={8} lg={5}>
                            <span style={{ marginRight: '2em' }}><Icon type="mail" /> concierge@specterone.com</span>
                            <a href="https://www.facebook.com/SpecterOneWatches/"><i className="fa fa-facebook-official" aria-hidden="true" style={{ marginRight: '2em', color: 'white' }}></i></a>
                            <a href="https://www.instagram.com/specteronewatches/"><i className="fa fa-instagram" aria-hidden="true" style={{ color: 'white' }}></i></a>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        );
    }
}

export default MainLayout;