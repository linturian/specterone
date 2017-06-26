import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class Tier extends Component {

    clickHandler = (e) => {
        e.preventDefault();
        this.props.history.push('/collection');
    }
    render() {
        return (
            <Card className="tier-card">
                <div className="custom-title">
                    <h3>{this.props.name}</h3>
                    <p>${this.props.price}</p>
                </div>
                <div className="custom-card">
                    {this.props.features.map((feature) => {
                        return (<p>{feature}</p>)
                    })}
                </div>
                <div className="custom-footer">
                    <Button onClick={this.clickHandler}>Subscribe</Button>
                </div>
            </Card>
        );
    }
}

class Tier6 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            email: ''
        }
    }

    render() {

        return (
            <div style={{ padding: '10vh' }}>
                <Row gutter={16}>
                    <Col sm={24} md={8} >
                        <Tier name="FIRST TIER" price="123" features={['brand 1', 'brand 2']} history={this.props.history} />
                    </Col>
                    <Col sm={24} md={8} >
                        <Tier name="SECOND TIER" price="213" features={['brand 1', 'brand 2']} history={this.props.history}  />
                    </Col>
                    <Col sm={24} md={8} >
                        <Tier name="THIRD TIER" price="312" features={['brand 1', 'brand 2']} history={this.props.history}  />
                    </Col>
                </Row>
            </div >

        );
    }
}

export default Tier6;
