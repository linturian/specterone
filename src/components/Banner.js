import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import { Parallax } from 'react-parallax';

class Banner extends Component {
    render() {
        return (
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
                    height: '70vh',
                    alignItems: 'center',
                    fontSize: '20px'
                }}>
                    <Col>
                        <h2>WELCOME TO SPECTER ONE</h2>
                        <br />
                        <p style={{ opacity: '.75', width: '300px' }}>Hold tight as we are working hard to bring astonishing watches to you.</p>
                        <form action="//specterone.us15.list-manage.com/subscribe/post?u=3b5936bf6be301a299947c2f3&amp;id=abf3b3e242" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
                            <div style={{ position: 'absolute', left: '-5000px', }} aria-hidden="true">
                                <input type="text" name="b_3b5936bf6be301a299947c2f3_abf3b3e242" tabIndex="-1" value="" />
                            </div>
                            <div className="clear">
                                <Button style={{ margin: '3em 1em 2em 0em' }} htmlType="submit" name="subscribe" id="mc-embedded-subscribe">Apply Now</Button>
                            </div>
                        </form>
                        {/* <Button>Watch Video</Button> */}
                    </Col>
                </Row>
            </Parallax>
        );
    }
}

export default Banner