import React from 'react';
import TierList from '../components/TierList';
import { Parallax } from 'react-parallax';
import { Col, Row, Button, Icon } from 'antd';


function Landing(props) {

    return (
        <div>
            <Parallax className="banner"
                strength={400}
                bgImage='img/watch-on-male-wrist-subtle.jpg'
                bgStyle={{
                    opacity: '.30'
                }}>
                <Row className="banner dark-theme" type="flex" style={{
                    margin: 'auto 8vw',
                    position: 'absolute',
                    alignItems: 'center'
                }}>
                    <Col id="apply" xs={24}>
                        <h1 style={{ fontWeight: '900' }}>WELCOME TO SPECTER ONE</h1>
                        <br />
                        <p className="banner-tag-line">
                            Access to a full collection of watches for $247/month
                        </p>
                        <form action="/register" method="get" >
                            <Button
                                style={{ margin: '3em 1em 2em 0em', width: '200px', height: '2.5em', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}
                                type="primary"
                                htmlType="submit">
                                JOIN THE WAITLIST
                                </Button>
                        </form>
                    </Col>
                </Row>
            </Parallax>  <section className="white-section" id="how-it-works">
                <Row>
                    <Col className="section-title" xs={24}>
                        {/* <p className="section-title-more">
                            JUST A FINAL DETAIL
                        </p> */}
                        <h1>HOW IT <span>WORKS</span></h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="section-content">
                    <Col xs={18}>
                        <Row type="flex" justify="center">
                            <Col xs={24} sm={12} lg={6} className="content-center">
                                <div className="details">
                                    <Icon type="edit" />
                                    <h3>1. APPLY</h3>
                                    <p>Register account and subscribe with us</p>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} lg={6} className="content-center">
                                <div className="details">
                                    <Icon type="select" />
                                    <h3>2. CHOOSE</h3>
                                    <p>Browse our watch collection and pick your favourites</p>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} lg={6} className="content-center">
                                <div className="details">
                                    <Icon type="gift" />
                                    <h3>3. RECEIVE</h3>
                                    <p>Watches will be delivered to you every subscription cycle</p>
                                </div>
                            </Col>
                            <Col xs={24} sm={12} lg={6} className="content-center">
                                <div className="details">
                                    <Icon type="rollback" />
                                    <h3>4. RETURN</h3>
                                    <p>Simply return watches and head to watch collection to select new watches</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>

            <section className="dark-theme" style={{
                backgroundImage: 'url("img/watch-on-male-wrist-opaque.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '300px',
                alignItems: 'center',
                display: 'flex',
                backgroundAttachment: 'fixed',
                padding: '0 1em'
            }}>
                <Col className="topic" xs={24} style={{ textAlign: 'center' }}>
                    <h1>SOPHISICATED LUXURY WATCH MODELS</h1>
                </Col>
            </section>
            <section className="white-section" id="brand-list">
                <Row type="flex" justify="center">
                    <Col xs={12} md={4} className="content-center">
                        <img src="img/watch-brands/ulysses.jpg" />
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
            <TierList />
            <section id="what-to-expect-section" className="white-section">
                <Row>
                    <Col className="section-title" xs={24}>
                        <p className="section-title-more">
                            MEMBER EXPERIENCE
                        </p>
                        <h1>WHAT TO <span>EXPECT</span></h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col className="section-content" xs={18}>
                        <Row type="flex" justify="center" align="top">
                            <Col xs={24} sm={12} lg={6}>
                                <img src="img/what-to-expect/access-to-watch-collection.jpg" alt="access to watch collection" />
                                <h3>ACCESS TO COLLECTION</h3>
                                <p>Pick the watch you love, Unbox the experience, Switch a new timepiece for every occasion.</p>
                            </Col>
                            <Col xs={24} sm={12} lg={6}>
                                <img src="img/what-to-expect/get-rewarded.jpg" alt="get rewarded for enjoying" />
                                <h3>GET REWARDED FOR ENJOYING</h3>
                                <p>Receive membership points as you enjoy your new timepiece!</p>
                            </Col>
                            <Col xs={24} sm={12} lg={6}>
                                <img src="img/what-to-expect/love-it-own-it.jpg" alt="love it own it" />
                                <h3>LOVE IT? OWN IT</h3>
                                <p>Purchase the watch you love from us!</p>
                            </Col>
                            <Col xs={24} sm={12} lg={6}>
                                <img src="img/what-to-expect/live-your-life.jpg" alt="live your life" />
                                <h3>LIVE YOUR LIFE</h3>
                                <p>Enjoy lifestyle benefits from our exclusive partners!</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section >
            <section id="call-to-action-section" className="dark-theme">
                <Row>
                    <Col className="section-title" xs={24}>
                        <p className="section-title-more">
                            SECURE YOUR SPOT TODAY. IT'S TIME, WELL SPENT.
                        </p>
                        <h1>YOUR <span>DREAM</span> WATCH COLLECTION</h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col xs={24}>
                        <form action="/register" method="get" >
                            <Button type="primary" style={{
                                fontSize: '1.25em',
                                height: '2.5em',
                                padding: '0 2em',
                                margin: '0 auto',
                                display: 'block'
                            }} htmlType="submit" >JOIN THE WAIT LIST</Button>

                        </form>
                    </Col>
                </Row>
            </section >
        </div >
    )
}

export default Landing;

