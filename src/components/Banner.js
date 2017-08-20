import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div className="banner" style={{
                backgroundImage: 'url("img/comingsoon-bg.jpg")',
                height: '80vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }}>
                <Row type="flex" style={{
                        margin: 'auto 0',
                        position: 'absolute',
                        left: '8vw',
                        height: 'inherit',
                        alignItems: 'center',
                        fontSize: '20px'
                }}> 
                <Col>
                    <h1>THE ADVENTURE BEGINS</h1>
                    <br/>
                    <p>Hold tight as we are working hard <br /> to bring astonishing watches to you.</p>
                    <br/><br/>
                    <Button style={{ marginRight: '1em' }}>Apply Now</Button>
                    {/* <Button>Watch Video</Button> */}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Banner