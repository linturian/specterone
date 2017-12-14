import React, { Component } from 'react';
import { Row, Col, Form, Input, Radio, Button } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {
	AuthenticationDetails,
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoIdentityServiceProvider
} from "amazon-cognito-identity-js";
import config from "../config";

const AWS = require('aws-sdk');

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

	// facebookSignup = (response) => {
	// 	console.log(response)
	// 	// Check if the user logged in successfully.
	// 	if (response) {

	// 		console.log("Add the Facebook access token to the Cognito credentials login map.")
	// 		// Add the Facebook access token to the Cognito credentials login map.
	// 		AWS.config.region = config.cognito.REGION;


	// 		AWS.config.credentials = new AWS.CognitoIdentityCredentials({
	// 			IdentityPoolId: config.cognito.IDENTITY_POOL_ID,
	// 			Logins: {
	// 				'graph.facebook.com': response.accessToken
	// 			}
	// 		});

	// 		// Obtain AWS credentials
	// 		AWS.config.credentials.get(function (error) {
	// 			// Access AWS resources here.
	// 			console.log(error)

				// const userPool = new CognitoUserPool({
				// 	UserPoolId: config.cognito.USER_POOL_ID,
				// 	ClientId: config.cognito.APP_CLIENT_ID
				// });

				// const attributeList = []

				// const attributeFirstname = new CognitoUserAttribute({
				// 	Name: 'given_name',
				// 	Value: response.first_name
				// });
				// const attributeLastname = new CognitoUserAttribute({
				// 	Name: 'family_name',
				// 	Value: response.last_name
				// });
				// const attributeGender = new CognitoUserAttribute({
				// 	Name: 'gender',
				// 	Value: response.gender
				// });

				// attributeList.push(attributeFirstname);
				// attributeList.push(attributeLastname);
				// attributeList.push(attributeGender);

				// new Promise((resolve, reject) => {
				// 	userPool.signUp(response.email, response.password, attributeList, null, (err, result) => {
				// 		if (err) {
				// 			console.log('Sign up error', err);
				// 			reject(err);
				// 			return;
				// 		}
				// 		resolve(result.user);
				// 	});
				// });
	// 		});

	// 		// this.props.history.push("/profile");

	// 	} else {
	// 		console.log('There was a problem logging you in.');
	// 	}
	// }

	render() {
		const WrappedRegistrationForm = Form.create()(RegistrationForm);
		const registerContainer = <div>
			{/* <Row type="flex" justify="center">
				<Col xs={12} md={6}>
					<FacebookLogin
						appId="1383863448403397"
						cssClass="ant-btn sign-up-facebook"
						textButton="Sign up with Facebook"
						fields="first_name,email,gender,last_name, verified"
						scope="public_profile, email, gender, first_name, last_name, verified"
						callback={this.facebookSignup}
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
					Already a member? <Link className="emphasize" to={`/login`}>Log In</Link>
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
					<Button type="primary" htmlType="submit" style={{ width: '100%' }}>Sign Up</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default Register;
