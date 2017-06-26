import React, { Component } from 'react';
import { Card, Col, Row, Button, Modal, Affix } from 'antd';
import { Redirect } from 'react-router-dom';
import WatchItem from './WatchItem';


class Collection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            selectedWatch: {},
            watchCollection: {
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
                },
                3: {
                    key: 3,
                    image: 'https://cdn.shopify.com/s/files/1/0377/2037/products/WhiteGoldLeather.Front_large.jpg',
                    name: 'WATCH NAME',
                    desc: 'Description',
                    state: 'available',
                    tier: 3
                },
                4: {
                    key: 4,
                    image: 'https://cdn.shopify.com/s/files/1/0377/2037/products/WhiteGoldLeather.Front_large.jpg',
                    name: 'WATCH NAME',
                    desc: 'Description',
                    state: 'available',
                    tier: 1
                }
            }
        }
    }

    clickHandler = (item, e) => {
        e.preventDefault();
        this.setState({ visible: true, selectedWatch: item });
    }

    cancelHandler = (item, e) => {
        e.preventDefault();
        this.setState({
            visible: false,
        });
        item.state = "available";
        console.log(this.state.watchCollection);
    }

    reserveHandler = (item) => {
        this.setState({ selectedWatch: item });
        this.state.selectedWatch.state = 'reserved';
        this.setState({
            visible: false,
            selectedWatch: {},
        });
        console.log(this.state.watchCollection);
    }

    confirmHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/collection/reserve');
    }

    render() {

        let collection = [];
        let { watchCollection } = this.state;
        Object.keys(watchCollection).forEach(key => {
            collection.push(<Col xs={24} sm={8} md={6} >
                <WatchItem
                    watch={watchCollection[key]}
                    onClick={this.clickHandler.bind(this, watchCollection[key])}
                    reserveHandler={this.reserveHandler.bind(this, watchCollection[key])}
                    cancelHandler={this.cancelHandler} />
            </Col>)
        });


        let button = <Button onClick={this.reserveHandler} style={{ margin: '24px 0 0 0' }} >Reserve</Button>
        if (this.state.selectedWatch.state == "reserved") {
            button = <Button onClick={this.cancelHandler} style={{ margin: '24px 0 0 0' }} >Cancel</Button>
        }

        return (
            <div>
                <Row>
                    <Col xs={24} style={{ textAlign: 'center', margin: '24px 0px' }}>
                        <h1>COLLECTION</h1>
                    </Col>
                </Row>
                <Row gutter={2}>
                    {collection}
                </Row>
                <Modal
                    title={null}
                    visible={this.state.visible}
                    onCancel={this.cancelHandler}
                    footer={null}
                >
                    <Row>
                        <Col xs={24} sm={12} style={{ textAlign: 'center' }}>
                            <img style={{ width: '100%' }}
                                src={this.state.selectedWatch.image} />
                            {button}
                        </Col>
                        <Col xs={24} sm={12}>
                            <h3>{this.state.selectedWatch.name}</h3>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Col>
                    </Row>
                </Modal>
                <Affix offsetBottom={0} style={{ position: 'absolute', right: 0}}>
                    <Button size="large"
                     style={{ backgroundColor: 'black', color: 'white'}}
                     onClick={this.confirmHandler}>Confirm Subscription</Button>
                </Affix>
            </div >
        );
    }
}

export default Collection;
