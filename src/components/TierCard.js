import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class TierCard extends Component {

    clickHandler = (e) => {
        e.preventDefault();
        this.props.clickHandler();
    }

    render() {
        return (
            <Card className="tier-card">
                <div className="custom-title">
                    <h3>{this.props.name}</h3>
                    <p>${this.props.price}</p>
                </div>
                <div className="custom-card">
                    {this.props.features.map((feature, i) => {
                        return (<p key={i}>{feature}</p>)
                    })}
                </div>
                <div className="custom-footer">
                    <Button onClick={this.clickHandler}>Subscribe</Button>
                </div>
            </Card>
        );
    }
}

export default TierCard;