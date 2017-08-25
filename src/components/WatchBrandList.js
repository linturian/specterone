import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class WatchBrandList extends Component {
    render() {
        return (
            <section className="white-section" id="brand-list">
                <Row className="section-content">
                   <Col xs={12} md={6} className="content-center">
                        <img style={{ width: '100%', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={12} md={6} className="content-center">
                        <img style={{ width: '100%', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={12} md={6} className="content-center">
                        <img style={{ width: '100%', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={12} md={6} className="content-center">
                        <img style={{ width: '100%', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={12} md={6} className="content-center">
                        <img style={{ width: '100%', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={12} md={6} className="content-center">
                        <img style={{ width: '100%', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={12} md={6} className="content-center">
                        <img style={{ width: '100%', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                    <Col xs={12} md={6} className="content-center">
                        <img style={{ width: '100%', height: '100px', backgroundColor: 'grey' }} />
                    </Col>
                </Row>
            </section >
        );
    }
}

export default WatchBrandList