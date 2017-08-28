import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class HowItWorks extends Component {
    render() {
        return (
            <section className="white-section" id="how-it-works">
                <Row>
                    <Col className="topic" xs={24}>
                        <h2>HOW IT WORKS</h2>
                    </Col>
                </Row>
                <Row className="section-content">
                    <Col xs={24} md={6} className="content-center">
                        <img src="img/how-it-work/browse.jpg" />
                        <div className="details">
                            <p>1. BROWSE</p>
                            <p>Browse our collections<br />specially curated for you</p>
                        </div>
                    </Col>
                    <Col xs={24} md={6} className="content-center">
                        <img src="img/how-it-work/choose.jpg" />
                         <div className="details">
                        <p>2. CHOOSE</p>
                        <p>Lock in your favorites and<br />we will deliver to your doorstep</p>
                        </div>
                    </Col>
                    <Col xs={24} md={6} className="content-center">
                        <img src="img/how-it-work/appreciate.jpg" />
                         <div className="details">
                        <p>3. APPRECIATE</p>
                        <p>Dazzle the ladies, impress your bosses.<br />Be part of the watch-bearing elite</p>
                        </div>
                    </Col>
                    <Col xs={24} md={6} className="content-center">
                        <img src="img/how-it-work/return.jpg"  />
                         <div className="details">
                        <p>4. RETURN</p>
                        <p>Simply return the current one to us <br/>upon each rotationand <br/>and receive your next favorite!</p>
                        </div>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default HowItWorks