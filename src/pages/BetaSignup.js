import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class BetaSignup extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="middle" style={{ height: '100vh', textAlign: 'center', backgroundPosition: 'center', backgroundImage: 'url("img/comingsoon-bg.jpg")' }} >
                    <Col xs={20} >
                        <h1 style={{ marginBottom: '2em' }} className='logo'>SPECTER ONE</h1>
                        <h2 style={{ marginBottom: '1em' }}>COMING SOON...</h2>
                        <h1>THE ADVENTURE BEGINS</h1>
                        <br />
                        <p>Hold tight as we are working hard to bring astonishing watches to you.</p>
                        <br /><br /><br />
                        <form action="//specterone.us15.list-manage.com/subscribe/post?u=3b5936bf6be301a299947c2f3&amp;id=abf3b3e242" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">

                            <div style={{ position: 'absolute', left: '-5000px', }} aria-hidden="true">
                                <input type="text" name="b_3b5936bf6be301a299947c2f3_abf3b3e242" tabIndex="-1" value="" />
                            </div>
                            <div className="clear">
                                <Button htmlType="submit" name="subscribe" id="mc-embedded-subscribe">SIGN UP NOW</Button>
                            </div>
                        </form>

                    </Col>
                </Row>
            </div >
        );
    }
}

export default BetaSignup;
