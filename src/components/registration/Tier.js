import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import TierCard from '../TierCard';


class Tier extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            email: ''
        }
    }

    clickHandler = () => {
        this.props.history.push('/collection');
    }

    render() {

        return (
            <div className="tiers" style={{ padding: '3em' }}>
                <Row gutter={16}>
                    <Col sm={24} md={8} >
                        <TierCard name="FIRST TIER" price="123" features={['brand 1', 'brand 2']} clickHandler={this.clickHandler}/>
                    </Col>
                    <Col sm={24} md={8} >
                        <TierCard name="SECOND TIER" price="213" features={['brand 1', 'brand 2']} clickHandler={this.clickHandler}/>
                    </Col>
                    <Col sm={24} md={8} >
                        <TierCard name="THIRD TIER" price="312" features={['brand 1', 'brand 2']} clickHandler={this.clickHandler}/>
                    </Col>
                </Row>
            </div >

        );
    }
}

export default Tier;
