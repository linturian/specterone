import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class WatchBrandList extends Component {
    render() {
        return (
            <section className="white-section" id="brand-list">
                <Row className="section-content">
                   <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/ulysses.jpg"/>
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/breitling.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/alange-soehne.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/tag-heuer.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/bell-n-ross.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/vacheron-constantin.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/blancpain.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/sevenfriday.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/patek.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/zenith.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/audemars-piguet.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/tudor.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/cartier.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/rolex.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/gcn-jlc.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/hublot.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/officine-panerai.jpg" />
                    </Col>
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/girard-perregaux.jpg" />
                    </Col>
                    {/* <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/iwc.jpg" />
                    </Col> */}
                </Row>
            </section >
        );
    }
}

export default WatchBrandList