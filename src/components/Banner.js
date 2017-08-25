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
                        <Button style={{ margin: '3em 1em 2em 0em' }}>Apply Now</Button>
                        {/* <Button>Watch Video</Button> */}
                    </Col>
                </Row>
            </Parallax>
        );
    }
}

export default Banner