import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class HowItWorks extends Component {
    render() {
        return (
            <section>
            <Row style={{ margin: '0px 50px' }}>
                <Col xs={24} style={{ textAlign: 'center', margin: '3em 0' }}>
                    <h2>HOW IT WORKS</h2>
                </Col>
            </Row>
            <Row style={{ margin: '0px 50px' }}>            
                <Col xs={24} md={6} className="content-center"> 
                    <img style={{width:'200px', height:'200px', backgroundColor: 'yellow'}}/>
                  <p>1. Browse our collections</p>
                </Col>
                <Col xs={24} md={6} className="content-center"> 
                    <img style={{width:'200px', height:'200px', backgroundColor: 'yellow'}}/>
                  <p>2. Choose your favorites &amp; we will deliver to your doorstep</p>
                </Col>
                <Col xs={24} md={6} className="content-center"> 
                    <img style={{width:'200px', height:'200px', backgroundColor: 'yellow'}}/>
                  <p>3. Appreciate dazzling the ... Be part of the ....</p>
                </Col>
                <Col xs={24} md={6} className="content-center"> 
                    <img style={{width:'200px', height:'200px', backgroundColor: 'yellow'}}/>
                  <p>4. Return a week before each upcoming rotation to receive the next!</p>
                </Col>
            </Row>
            </section>
        );
    }
}

export default HowItWorks