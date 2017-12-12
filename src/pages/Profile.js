import React, { Component } from 'react';
import { Row, Col, Form, Input, Radio, Button, Alert } from 'antd';
import { Redirect } from 'react-router-dom';
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import config from "../config";
import { authUser } from "../libs/awsLib";

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            givenName: null,
            familyName: null,
            gender: null,
            isEmailVerified: false,
            isIdentityVerified: false,
            isMembered: false
        }
    }

    async componentWillMount() {
        try {
            const user = await authUser()
            console.log(user);
            const userInfo = user.signInUserSession.idToken.payload;
            this.setState({
                username: userInfo.email,
                givenName: userInfo.given_name,
                familyName: userInfo.family_name,
                gender: userInfo.gender,
                isEmailVerified: userInfo.email_verified
            });
        }
        catch (e) {
            console.log(e);
            this.props.history.push("/");
        }
    }

    setStatusMessage() {
        let message = '';
        if (!this.state.isEmailVerified) {
            message = "Pending email confirmation";
        } else if (!this.state.isIdentityVerified) {
            message = "Pending identity verification";
        } else if (!this.state.isMembered) {
            message = "Waiting for approval";
        }
        return message;
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
                        {!this.state.isEmailVerified && <Alert
                            message="Email Confirmation Required"
                            description="To comfirm your email, please follow instruction sent to your mailbox."
                            type="warning"
                            showIcon
                        />}
                        {!this.state.isIdentityVerified && <Alert
                            message="Documents required"
                            description={<WarningMessage />}
                            type="warning"
                            showIcon
                        />}
                        {!this.state.isEmailVerified && <Alert
                            message="Verifying documents"
                            description="We are in a midst of verifying your documents. Once completed, you will receive an email from us."
                            type="info"
                            showIcon
                        />}
                    </Col>
                </Row>
                <Row type="flex" justify="center" className="info-container">
                    <Col xs={18} md={12}>
                        <span className="section-title">Account Information</span>
                        <Col xs={24} className="details">
                            <span><b>Status</b></span>
                            <p>{this.setStatusMessage()}</p>
                        </Col>
                        <Col xs={12} className="details">
                            <span><b>Email</b></span>
                            <p>{this.state.username}</p>
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
                            <p>{this.state.givenName}</p>
                        </Col>
                        <Col xs={12} className="details">
                            <span><b>Family Name</b></span>
                            <p>{this.state.familyName}p</p>
                        </Col>
                        <Col xs={12} className="details">
                            <span><b>Gender</b></span>
                            <p>{this.state.gender}</p>
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

export default Profile;
