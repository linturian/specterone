import React, { Component } from 'react';
import { Row, Col, Form, Input, Radio, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {
	AuthenticationDetails,
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoIdentityServiceProvider
} from "amazon-cognito-identity-js";
import config from "../config";

class Register extends Component {

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
		const WrappedRegistrationForm = Form.create()(RegistrationForm);
		const registerContainer = <div>
			{/* <Row type="flex" justify="center">
				<Col xs={12} md={6}>
					<FacebookLogin
						cssClass="ant-btn sign-up-facebook"
						textButton="Sign up with Facebook"
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
				<Col xs={22} md={6} style={{ marginBottom: '24px' }}>
					<p className="hr-text">OR</p>
				</Col>
			</Row> */}
			<Row type="flex" justify="center">
				<Col xs={22} md={6}>
					<WrappedRegistrationForm callback={this.callback} />
				</Col>
			</Row>
		</div>
		const confirmContainer = <Row type="flex" justify="center">
			<Col xs={20} md={12}>
				Confirmation email has been sent. Please check your junk/spam mailbox if you did not see the email in your inbox.
			</Col>
		</Row>
		return (
			<section className="white-section" id="register">
				<Row type="flex" justify="center">
					<Col xs={12} style={{ marginBottom: '42px' }} >
						<center>
							<h1>JOIN THE WAITLIST</h1>
						</center>
					</Col>
				</Row>
				{this.state.user == null ? registerContainer : confirmContainer}
			</section>
		);
	}
}


class RegistrationForm extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll(async (err, values) => {
			if (!err) {
				const newUser = await this.signup(values.email, values.password, values.firstname, values.lastname, values.gender);
				this.props.callback(newUser);
			}
		});
	}

	signup = (email, password, firstname, lastname, gender) => {
		const userPool = new CognitoUserPool({
			UserPoolId: config.cognito.USER_POOL_ID,
			ClientId: config.cognito.APP_CLIENT_ID
		});

		const attributeList = []

		const attributeFirstname = new CognitoUserAttribute({
			Name: 'given_name',
			Value: firstname
		});
		const attributeLastname = new CognitoUserAttribute({
			Name: 'family_name',
			Value: lastname
		});
		const attributeGender = new CognitoUserAttribute({
			Name: 'gender',
			Value: gender
		});

		attributeList.push(attributeFirstname);
		attributeList.push(attributeLastname);
		attributeList.push(attributeGender);

		return new Promise((resolve, reject) => {
			userPool.signUp(email, password, attributeList, null, (err, result) => {
				if (err) {
					console.log('Sign up error', err);
					reject(err);
					return;
				}
				resolve(result.user);
			});
		});
	}

	checkPassword = (rule, value, callback) => {
		const specialCharacterFormat = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
		const digitFormat = /\d/;
		const lowercaseFormat = /[a-z]/;
		const uppercaseFormat = /[A-Z]/;
		if (value == null) {
			callback();
		} else if (value.length < 8) {
			callback('Password must be at least 8 characters');
		} else if (specialCharacterFormat.test(value) && digitFormat.test(value) && lowercaseFormat.test(value) && uppercaseFormat.test(value)) {
			callback();
		} else {
			callback('Password must be a combination of lowercase alphabet, uppercase alphabet, number, and special character');
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit}>
				<Form.Item>
					{getFieldDecorator('email', {
						rules: [{
							type: 'email', message: 'The input is not valid E-mail!',
						}, {
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
						}, {
							validator: this.checkPassword,
						}],
					})(
						<Input placeholder="Password" type="password" />
						)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('firstname', {
						rules: [{ required: true, message: 'Please input your first name!' }],
					})(
						<Input placeholder="First Name" />
						)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('lastname', {
						rules: [{ required: true, message: 'Please input your last name!' }],
					})(
						<Input placeholder="Last Name" />
						)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator('gender', {
						rules: [{ required: true, message: 'Please select your gender!' }],
					})(
						<Radio.Group >
							<Radio value={'male'}>Male</Radio>
							<Radio value={'female'}>Female</Radio>
						</Radio.Group>
						)}
				</Form.Item>
				<Form.Item>
					<Button type="dark" htmlType="submit" style={{ width: '100%' }}>Sign Up</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default Register;
