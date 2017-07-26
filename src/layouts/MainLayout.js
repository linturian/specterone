import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class MainLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout>
                <Layout>
                    <Header id="layout-header" >
                        <Row type="flex" justify="space-between">
                            <Col xs={24} md={6}>
                                <div className="logo" />
                            </Col>
                            <Col xs={24} md={9} >
                                <Menu mode="horizontal" style={{ lineHeight: '64px' }}>
                                    <Menu.Item key="1">COLLECTION</Menu.Item>
                                    <Menu.Item key="2">FAQ</Menu.Item>
                                    <Menu.Item key="3">CONCIERGE</Menu.Item>
                                    <Menu.Item key="4">LOGIN</Menu.Item>
                                </Menu>
                            </Col>
                        </Row>
                    </Header>
                    <Content style={{backgroundColor: '#252525'}}>
                        {this.props.children}
                    </Content>
                    <Footer>
                        <Row type="flex" justify="space-between">
                            <Col xs={24} md={4}>CONTACT OUR CONCIERGE</Col>
                            <Col xs={24} md={5}>
                                <span style={{ marginRight: '2em' }}><Icon type="mail" /> email@email.com</span>
                                <Icon type="phone" /> +65-1234-1234
                            </Col>
                        </Row>
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayout;