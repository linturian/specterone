import React, { Component } from 'react';
import { Row, Col, Form, Input, Radio, Button } from 'antd';
import {Redirect} from 'react-router-dom';

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

	render() {


		return (
			<div style={{ paddingTop: '10vh' }}>
				<Row type="flex" justify="center">
					<Col xs={12} md={6} style={{ marginBottom: '24' }} >
						<center>
							<h1>Create an account</h1>
						</center>
					</Col>
				</Row>
				<Row type="flex" justify="center">
					<Col xs={12} md={6}>
						<Button style={{ marginBottom: '10', width: '100%' }} htmlType="button">Sign up with Facebook</Button>
					</Col>
				</Row>
				<Row type="flex" justify="center">
					<Col xs={12} md={6}>
						<Button style={{ marginBottom: '24', width: '100%' }} htmlType="button">Sign up with Google</Button>
					</Col>
				</Row>
				<Row type="flex" justify="center">
					<Col xs={24} md={6} style={{ marginBottom: '24' }}>
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
								<Radio.Group value={this.state.gender}>
									<Radio>Male</Radio>
									<Radio>Female</Radio>
								</Radio.Group>
							</Form.Item>
							<Form.Item>
								<Button htmlType="submit" size="medium" style={{ width: '100%' }}>Sign Up</Button>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Register;
