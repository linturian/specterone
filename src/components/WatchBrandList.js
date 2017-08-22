import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class WatchBrandList extends Component {
    render() {
        return (
            <section className="white-section" id="tier-list">
                <Row className="section-content">
                   <Col xs={6} className="content-center">
                        <img style={{ width: '200px', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={6} className="content-center">
                        <img style={{ width: '200px', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={6} className="content-center">
                        <img style={{ width: '200px', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={6} className="content-center">
                        <img style={{ width: '200px', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={6} className="content-center">
                        <img style={{ width: '200px', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={6} className="content-center">
                        <img style={{ width: '200px', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={6} className="content-center">
                        <img style={{ width: '200px', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={6} className="content-center">
                        <img style={{ width: '200px', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                </Row>
            </section >
        );
    }
}

export default WatchBrandList