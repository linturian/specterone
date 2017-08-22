import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class TierList extends Component {
    render() {
        return (
            <section className="white-section" id="tier-list">
                <Row>
                    <Col className="topic" xs={24}>
                        <h2>COLLECTION</h2>
                    </Col>
                </Row>
                <Row className="section-content">
                    <TierItem title="ENTHUSIAST" price="starting $247/month" />
                    <TierItem title="AFRICIONADO" price="starting $497/month" style={{borderLeft: '1px solid lightgrey', borderRight: '1px solid lightgrey'}} />
                    <TierItem title="CONNOISSEUR" price="starting $897/month" />
                </Row>
                <Row id="view-all-models">
                    <Button>View All Models</Button>
                </Row>
            </section >
        );
    }
}

class TierItem extends Component {
    render() {
        let style = {
            padding: '0 1em',
            ...this.props.style
        }
        console.log(style);
        return (
            <Col xs={24} md={8} className="content-center" style={style}>
                <Col xs={24} style={{marginBottom: '2em'}}>
                    <span style={{fontSize: '1.5em', fontWeight: '600'}}>{this.props.title}</span>
                    <br />
                    {this.props.price}
                </Col>
                <WatchItem />
                <WatchItem />
                <WatchItem />
            </Col>
        );
    }

}

class WatchItem extends Component {
    render() {
        return (
            <Col xs={8}>
                <img style={{ width: '100%', padding: '5px' }} src="img/watch-temp.png" />
            </Col>
        );
    }
}

export default TierList