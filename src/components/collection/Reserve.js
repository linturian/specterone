import React, { Component } from 'react';
import { Card, Col, Row, Button, Modal } from 'antd';
import { Redirect } from 'react-router-dom';
import WatchItem from './WatchItem';

class Reserve extends Component {

    constructor(props) {
        super(props);
        this.state = {
            reserved: {
                1: {
                    key: 1,
                    image: 'https://cdn.shopify.com/s/files/1/0377/2037/products/WhiteGoldLeather.Front_large.jpg',
                    name: 'WATCH NAME',
                    desc: 'Description',
                    state: 'available',
                    tier: 1
                },
                2: {
                    key: 2,
                    image: 'https://cdn.shopify.com/s/files/1/0377/2037/products/WhiteGoldLeather.Front_large.jpg',
                    name: 'WATCH NAME',
                    desc: 'Description',
                    state: 'available',
                    tier: 2
                }
            }
        }
    }

    clickHandler = (item, e) => {
        e.preventDefault();
        this.setState({ visible: true, selectedWatch: item });
    }

    subscribeHandler = (e) => {
        e.preventDefault();
        Modal.success({
            title: 'This is a success message',
            content: 'some messages...some messages...',
            okText: 'OK'
        });
    }

    render() {

        let collection = [];
        let { reserved } = this.state;
        Object.keys(reserved).forEach(key => {
            collection.push(
                <Col xs={24} sm={8}  >
                    <div className="watch-image">
                        <img style={{ width: '100%' }}
                            src="https://cdn.shopify.com/s/files/1/0377/2037/products/WhiteGoldLeather.Front_large.jpg" />
                    </div>
                    <div className="watch-details" style={{ textAlign: 'center' }}>
                        <h4>{reserved[key].name}</h4>
                        <p>{reserved[key].desc}</p>
                    </div>
                </Col>
            )
        });

        return (
            <div>
                <Row>
                    <Col xs={24} style={{ textAlign: 'center', margin: '24px 0px' }}>
                        <h1>COMFIRMATION</h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col xs={12} md={3} >
                        <h3>MEMBERSHIP</h3>
                    </Col>
                    <Col xs={12} md={3} style={{ textAlign: 'right' }} >
                        <h3>TIER</h3>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col xs={12} md={3} >
                        <p>6 months subscription</p>
                    </Col>
                    <Col xs={12} md={3} style={{ textAlign: 'right' }}>
                        <p>Tier 1 Name</p>
                    </Col>
                </Row>
                <Row type="flex" justify="center" style={{ margin: '30px 0px' }}>
                    <Col xs={24} md={6} >
                        <Row gutter={2}>
                            {collection}
                        </Row>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col xs={12} md={3} >
                        <h3>TOTAL</h3>
                    </Col>
                    <Col xs={12} md={3} style={{ textAlign: 'right' }}>$248.00/month</Col>
                </Row>
                <Row type="flex" justify="center" style={{ margin: '30px 0px' }}>
                    <Col xs={12} md={6} style={{ textAlign: 'center' }}>
                        <Button onClick={this.subscribeHandler}>Subscribe</Button>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default Reserve;
