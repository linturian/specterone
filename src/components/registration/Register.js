import React, { Component } from 'react';
import { Row, Col, Form, Input, Radio, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Register extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			gender: '',
			email: ''
		}
	}

	submitHandler = (e) => {
		e.preventDefault();
		this.props.history.push('/register/membership-term');
	}

	onGenderChange = (e) => {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
	}

	render() {


		return (
			<div style={{ paddingTop: '10vh' }}>
				<Row type="flex" justify="center">
					<Col xs={12} md={6} style={{ marginBottom: '24px' }} >
						<center>
							<h1>Create an account</h1>
						</center>
					</Col>
				</Row>
				<Row type="flex" justify="center">
					<Col xs={12} md={6}>
						<FacebookLogin
							cssClass="ant-btn sign-up-facebook"
							textButton="Sign up with Facebook"
						/>
					</Col>
				</Row>
				<Row type="flex" justify="center">
					<Col xs={12} md={6}>
						<GoogleLogin
							className="ant-btn sign-up-google"
							buttonText="Sign up with Google"
						/>
					</Col>
				</Row>
				<Row type="flex" justify="center">
					<Col xs={24} md={6} style={{ marginBottom: '24px' }}>
						<p className="hr-text">OR</p>
					</Col>
				</Row>
				<Row type="flex" justify="center">
					<Col xs={24} md={6}>
						<Form onSubmit={this.submitHandler}>
							<Form.Item>
								<Input placeholder="Email Address" />
							</Form.Item>
							<Form.Item>
								<Input placeholder="Password" />
							</Form.Item>
							<Form.Item>
								<Input placeholder="First Name" />
							</Form.Item>
							<Form.Item>
								<Input placeholder="Last Name" />
							</Form.Item>
							<Form.Item>
								<GenderRadioGroup />
							</Form.Item>
							<Form.Item>
								<Button type="primary" htmlType="submit" style={{ width: '100%' }}>Sign Up</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}

class GenderRadioGroup extends React.Component {
	state = {
		value: 1,
	}
	onChange = (e) => {
		console.log('radio checked', e.target.value);
		this.setState({
			value: e.target.value,
		});
	}
	render() {
		return (
			<Radio.Group onChange={this.onChange} value={this.state.value}>
				<Radio value={'male'}>Male</Radio>
				<Radio value={'female'}>Female</Radio>
			</Radio.Group>
		);
	}
}

export default Register;
