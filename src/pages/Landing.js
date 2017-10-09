import React from 'react';
import { MainLayout } from '../layouts';
import TierList from '../components/TierList';
import { Parallax } from 'react-parallax';
import { Col, Row, Button, Icon } from 'antd';


function Landing(props) {

    return (
        <MainLayout>
            <Parallax className="banner"
                strength={400}
                bgImage='img/watch-on-male-wrist-subtle.jpg'
                bgStyle={{
                    opacity: '.30'
                }}>
                <Row type="flex" style={{
                    margin: 'auto 0',
                    position: 'absolute',
                    left: '8vw',
                    height: '95vh',
                    alignItems: 'center'
                }}>
                    <Col id="apply">
                        <h1 style={{fontWeight: '900'}}>WELCOME TO SPECTER ONE</h1>
                        <br />
                        <p
                            style={{ opacity: '.75', width: '300px', fontSize: 'medium', letterSpacing: '0.08em' }}>
                            Hold tight as we are working hard to bring astonishing watches to you
                        </p>
                        <form action="//specterone.us15.list-manage.com/subscribe/post?u=3b5936bf6be301a299947c2f3&amp;id=abf3b3e242" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                            <div style={{ position: 'absolute', left: '-5000px', }} aria-hidden="true">
                                <input type="text" name="b_3b5936bf6be301a299947c2f3_abf3b3e242" tabIndex="-1" value="" />
                            </div>
                            <div className="clear">
                                <Button
                                    style={{ margin: '3em 1em 2em 0em', width: '200px', height: '2.5em', boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}
                                    type="primary"
                                    htmlType="submit"
                                    name="subscribe"
                                    id="mc-embedded-subscribe">
                                    JOIN THE WAITLIST
                                </Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Parallax>
            <section id="what-to-expect-section">
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
                        <Row>
                            <Col xs={6}>
                                <img src="img/what-to-expect/access-to-watch-collection.jpg" alt="access to watch collection" />
                                <h3>ACCESS TO WATCH COLLECTION</h3>
                            </Col>
                            <Col xs={6}>
                                <img src="img/what-to-expect/get-rewarded.jpg" alt="get rewarded for enjoying" />
                                <h3>GET REWARDED FOR ENJOYING</h3>
                            </Col>
                            <Col xs={6}>
                                <img src="img/what-to-expect/love-it-own-it.jpg" alt="love it own it" />
                                <h3>LOVE IT? OWN IT</h3>
                            </Col>
                            <Col xs={6}>
                                <img src="img/what-to-expect/live-your-life.jpg" alt="live your life" />
                                <h3>LIVE YOUR LIFE</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <p>Pick the watch you love, Unbox the experience, Switch a new timepiece for every occasion.</p>
                            </Col>
                            <Col xs={6}>
                                <p>Receive membership points as you enjoy your new timepiece!</p>
                            </Col>
                            <Col xs={6}>
                                <p>Purchase the watch you love from us!</p>
                            </Col>
                            <Col xs={6}>
                                <p>Enjoy lifestyle benefits from our exclusive partners!</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section >
            <section style={{
                backgroundImage: 'url("img/watch-on-male-wrist-opaque.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '300px',
                alignItems: 'center',
                display: 'flex',
                backgroundAttachment: 'fixed'
            }}>
                <Col className="topic" xs={24} style={{ textAlign: 'center' }}>
                    <h2>SOPHISICATED LUXURY WATCH MODELS</h2>
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
            <section className="white-section" id="how-it-works">
                <Row>
                    <Col className="section-title" xs={24}>
                        <p className="section-title-more">
                            JUST A FINAL DETAIL
                        </p>
                        <h1>HOW IT <span>WORK</span></h1>
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="section-content">
                    <Col xs={18}>
                        <Col xs={24} md={6} className="content-center">
                            <div className="details">
                                <Icon type="edit"/>
                                <p>1. APPLY</p>
                                <p>Register account with us and subscribe to one of the three tiers</p>
                            </div>
                        </Col>
                        <Col xs={24} md={6} className="content-center">
                            <div className="details">
                                <Icon type="select" />
                                <p>2. CHOOSE</p>
                                <p>Browse our watch collection and pick your favourites</p>
                            </div>
                        </Col>
                        <Col xs={24} md={6} className="content-center">
                            <div className="details">
                                <Icon type="gift" />
                                <p>3. RECEIVE</p>
                                <p>Watches will be delivered to you every subscription cycle</p>
                            </div>
                        </Col>
                        <Col xs={24} md={6} className="content-center">
                            <div className="details">
                                <Icon type="rollback" />
                                <p>4. RETURN</p>
                                <p>Simply return watches and head to watch collection to select new watches</p>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </section>
            <section id="features">
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
                        <form action="//specterone.us15.list-manage.com/subscribe/post?u=3b5936bf6be301a299947c2f3&amp;id=abf3b3e242" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                            <div style={{ position: 'absolute', left: '-5000px', }} aria-hidden="true">
                                <input type="text" name="b_3b5936bf6be301a299947c2f3_abf3b3e242" tabIndex="-1" value="" />
                            </div>
                            <div className="clear">
                                <Button type="primary" style={{
                                    fontSize: '1.25em',
                                    height: '2.5em',
                                    padding: '0 2em',
                                    margin: '0 auto',
                                    display: 'block'
                                }} htmlType="submit" name="subscribe" id="mc-embedded-subscribe">JOIN THE WAIT LIST</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </section >
            {/* <Row style={{ margin: '1em 50px' }}>
                <Col xs={24} style={{ textAlign: 'center', marginTop: '3em' }}>
                    <h2>FAQ</h2>
                </Col>
                <Col xs={24}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h3>1. Lorem ipsum dolor sit amet?</h3></td>
                            </tr>
                            <tr>
                                <td><p>{text}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row> */}
        </MainLayout >
    )
}

export default Landing;

