import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

class MainLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Layout>
                    <Header id="layout-header">
                        <div className="logo" />
                        <Menu mode="horizontal" style={{ lineHeight: '64px', float: 'right' }}>
                            <Menu.Item key="1">APPLY</Menu.Item>
                            <Menu.Item key="2">COLLECTIONS</Menu.Item>
                            <Menu.Item key="3">FAQ</Menu.Item>
                            <Menu.Item key="4">CONCIERGE</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 2em' }}>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        );
    }
}

export default MainLayout;