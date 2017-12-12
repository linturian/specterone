import React, { Component } from 'react';
import { Row, Col, Form, Input, Radio, Button, Alert } from 'antd';
import { Redirect } from 'react-router-dom';
import {
    AuthenticationDetails,
    CognitoUserPool,
    CognitoUser
} from "amazon-cognito-identity-js";
import config from "../config";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    callback = (newUser) => {
        this.setState({
            user: newUser
        });
        console.log("called back", this.state)
    }


    render() {

        return (
            <section className="white-section" id="profile">
                <Row type="flex" justify="center">
                    <Col xs={22} style={{ marginBottom: '42px' }} >
                        <center>
                            <h1>ACCOUNT & SETTING</h1>
                        </center>
                    </Col>
                </Row>
                <Row type="flex" justify="center">
                    <Col xs={18} md={12} style={{ marginBottom: '2em' }}>
                        <Alert
                            message="Documents required"
                            description={<WarningMessage />}
                            type="warning"
                            showIcon
                        />
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="info-container">
                    <Col xs={18} md={12}>
                        <span className="section-title">Account Information</span>
                        <Col xs={24} className="details">
                            <span><b>Status</b></span>
                            <p>Pending identity verification</p>
                        </Col>
                        <Col xs={12} className="details">
                            <span><b>Email</b></span>
                            <p>test@test.com</p>
                        </Col>
                        <Col xs={12} className="details">
                            <span><b>Password</b></span>
                            <p>********</p>
                        </Col>
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="info-container" style={{}}>
                    <Col xs={18} md={12}>
                        <span className="section-title">Personal Information</span>
                        <Col xs={12} className="details">
                            <span><b>Given Name</b></span>
                            <p>Lin</p>
                        </Col>
                        <Col xs={12} className="details">
                            <span><b>Family Name</b></span>
                            <p>Ananphumtriphop</p>
                        </Col>
                        <Col xs={12} className="details">
                            <span><b>Gender</b></span>
                            <p>Female</p>
                        </Col>
                        {/* <Col xs={12} className="details">
                                <span><b>Phone</b></span>
                                <p>+65 96156660</p>
                            </Col> */}
                    </Col>
                </Row>

            </section>
        );
    }
}

function WarningMessage(props) {
    return (
        <div>
            To comfirm your identity, please email the following documents to concierge@specterone.com<br />
            <ul style={{ marginTop: '0.5em', marginLeft: '1em' }}>
                <li>- ID document (Front and Back)</li>
                <li>- Bank statement with address, not more than 3 months old</li>
            </ul>
        </div>
    );
}

class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                await this.login(values.email, values.password);
                console.log("loggined in")
            }
        });
    }

    login(email, password) {
        const userPool = new CognitoUserPool({
            UserPoolId: config.cognito.USER_POOL_ID,
            ClientId: config.cognito.APP_CLIENT_ID
        });

        const user = new CognitoUser({ Username: email, Pool: userPool });
        const authenticationData = { Username: email, Password: password };
        const authenticationDetails = new AuthenticationDetails(authenticationData);

        return new Promise((resolve, reject) =>
            user.authenticateUser(authenticationDetails, {
                onSuccess: result => resolve(),
                onFailure: err => {
                    if (err.code == "UserNotConfirmedException") {
                        alert("Please check your email");
                    }
                    if (err.code == "UserNotFoundException") {
                        alert("Invalid email or password");
                    }
                    reject(err)
                }
            })
        );
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    {getFieldDecorator('email', {
                        rules: [{
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input placeholder="Email Address" />
                        )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: 'Please input your password!',
                        }],
                    })(
                        <Input placeholder="Password" type="password" />
                        )}
                </Form.Item>

                <Form.Item>
                    <Button type="dark" htmlType="submit" style={{ width: '100%' }}>Log In</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Profile;
