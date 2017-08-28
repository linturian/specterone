import React from 'react';
import { MainLayout } from '../layouts';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import TierList from '../components/TierList';
import Features from '../components/Features';
import WatchBrandList from '../components/WatchBrandList';
import { Col, Row, Button, Icon } from 'antd';


function Landing(props) {

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

    return (
        <MainLayout>
            <Banner />
            <Features />
            <HowItWorks />
            <TierList />
            <section style={{
                backgroundImage: 'url("img/watch-on-male-wrist-opaque.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '300px',
                alignItems: 'center',
                display: 'flex',
                backgroundAttachment: 'fixed'
            }}>

                <Col className="topic" xs={24}>
                    <h2>SOPHISICATED LUXURY WATCH MODELS</h2>
                </Col>
            </section>
            <WatchBrandList />
            <section id="features">
                <Row>
                    <Col className="topic" xs={24}>
                        <h2>YOUR DREAM WATCH COLLECTION</h2>
                        <p>Secure your spot today. It's time, well spent.</p>
                    </Col>
                </Row>
                <Row className="list-of-features">
                    <Col xs={24}>
                        <form action="//specterone.us15.list-manage.com/subscribe/post?u=3b5936bf6be301a299947c2f3&amp;id=abf3b3e242" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                            <div style={{ position: 'absolute', left: '-5000px', }} aria-hidden="true">
                                <input type="text" name="b_3b5936bf6be301a299947c2f3_abf3b3e242" tabIndex="-1" value="" />
                            </div>
                            <div className="clear">
                                <Button type="primary" style={{
                            fontSize: '1.5em',
                            height: '2.5em',
                            margin: '2em',
                            padding: '0 2em'
                        }} htmlType="submit" name="subscribe" id="mc-embedded-subscribe">JOIN THE WAIT LIST</Button>
                            </div>
                        </form>
                    </Col>
                    <Col xs={6} style={{padding: '1em 2em'}}><p><Icon type="check" /> A special curated watch collection for your selection.</p></Col>
                    <Col xs={6} style={{padding: '1em 2em'}}><p><Icon type="check" /> Timepieces come professionally cleaned, mechanically &amp; cosmetically inspected.</p></Col>
                    <Col xs={6} style={{padding: '1em 2em'}}><p><Icon type="check" /> Hassle-free, exciting &amp; luxurious unboxing experience .</p></Col>
                    <Col xs={6} style={{padding: '1em 2em'}}><p><Icon type="check" /> Monthly billing, cancel anytime.</p></Col>
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

