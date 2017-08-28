import React, { Component } from 'react';
import { Col, Row, Icon } from 'antd';

class Features extends Component {
    render() {
        return (
            <section id="features">
                <Row>
                     <Col className="topic" xs={24}>
                        <h2>FEATURES</h2>
                    </Col>
                </Row>
                <Row className="list-of-features">
                    <Col xs={24}>
                        <p><Icon type="check" /> Pick your favourites &amp; enjoy each exclusive timepiece for 3 months at a time.</p>

                        <p><Icon type="check" /> Delivered &amp; presented to you at your convenience.</p>

                        <p><Icon type="check" /> Monthly billing, cancel anytime.</p>

                        <p><Icon type="check" /> Immerse in a wide variety of partner offers &amp; privileged invites.</p>

                        <p><Icon type="check" /> Simply return after each rotation and receive your next.</p>
                    </Col>

                </Row>
            </section >
        );
    }
}

export default Features