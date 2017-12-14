import React, { Component } from 'react';
import { Row, Col, Form, Input, Radio, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {
    AuthenticationDetails,
    CognitoUserPool,
    CognitoUser
} from "amazon-cognito-identity-js";
import config from "../config";

class Login extends Component {

    callback = () => {
        this.props.userHasAuthenticated(true);
        this.props.history.push("/profile");
    }

    responseFacebook = (response) => {
        console.log(response);
    }

    render() {
        const WrappedLoginForm = Form.create()(LoginForm);

        return (

            <section className="white-section" id="login">
                <Row type="flex" justify="center">
                    <Col xs={12} style={{ marginBottom: '42px' }} >
                        <center>
                            <h1>LOG IN</h1>
                        </center>
                    </Col>
                </Row>
                {/* <Row type="flex" justify="center">
                    <Col xs={22} md={6}>
                        <FacebookLogin
                            appId="325383964609164"
                            cssClass="ant-btn sign-up-facebook"
                            textButton="Log in with Facebook"
                            fields="name,email,picture,gender"
                            scope="public_profile, email, gender"
                            callback={this.responseFacebook}
                        />
                    </Col>
                </Row> */}
                {/* <Row type="flex" justify="center">
                        <Col xs={12} md={6}>
                            <GoogleLogin
                                className="ant-btn sign-up-google"
                                buttonText="Sign up with Google"
                            />
                        </Col>
                    </Row> */}
                {/* <Row type="flex" justify="center">
                        <Col xs={22} md={6} style={{ marginBottom: '24px', marginTop: '12px' }}>
                            <p className="hr-text">OR</p>
                        </Col>
                    </Row> */}
                <Row type="flex" justify="center">
                    <Col xs={22} md={6}>
                        <WrappedLoginForm callback={this.callback} />
                    </Col>
                </Row>
            </section>
        );
    }
}


class LoginForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll(async (err, values) => {
            if (!err) {
                await this.login(values.email, values.password);
                this.props.callback(values.email);
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
                    <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Log In</Button>
                </Form.Item>
            </Form>
        );
    }
}

export default Login;
