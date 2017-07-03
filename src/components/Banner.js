import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class Banner extends Component {
    render() {
        return (
            <div class="banner" style={{
                backgroundImage: "url('https://images.askmen.com/1080x540/style/watch_snob/watch-forums-1108680-TwoByOne.jpg')",
                height: '80vh',
                backgroundSize: 'cover'
                }}>
                <Row type="flex" style={{
                        margin: 'auto 0',
                        position: 'absolute',
                        left: '8em',
                        height: 'inherit',
                        alignItems: 'center',
                        fontSize: '20px'
                }}> 
                <Col>

                    <h1>TITLE</h1>
                    <p>Paragraph of somethings</p>
                    <br/><br/>
                    <Button>Discover More</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Banner