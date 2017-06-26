import React, { Component } from 'react';
import { Row, Col, Form, Input, Radio, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class MembershipTerm extends Component {

	constructor(props) {
		super(props);
	}

	clickHandler = (e) => {
		e.preventDefault();
		this.props.history.push('/register/membership-term/6');
	}

	render() {
		const { fireRedirect } = this.props;
		return (
			< div >
				
				<Row type="flex" justify="center"
					style={{
						height: '100vh'
					}}
				>
					<Col xs={24} md={12}
						style={{
							backgroundImage: 'url("https://ae01.alicdn.com/kf/HTB15D9KQVXXXXbYXFXXq6xXFXXXX/OUKESHI-Brand-Men-Watch-Fashion-Luxury-Black-Full-Stainless-Steel-Man-Business-Watch-Waterproof-Calendar-Watch.jpg")',
							backgroundPosition: 'center',
						}}
					>
						<div className='membership-term left' onClick={this.clickHandler}>
							<div
								style={{
									color: 'white',
									top: '30vh',
									position: 'relative',
									paddingLeft: '3vw',
									fontSize: '20px',
								}}
							>
								<h1 style={{
									color: 'white',
									fontSize: '69px',
								}}>6 months</h1>
								<p>Starting from $248/month</p>
							</div>
						</div>
					</Col>
					<Col xs={24} md={12}
						style={{
							backgroundImage: 'url("http://secretdealstoday.com/wp-content/uploads/2016/06/2016-New-Fashion-JIS-Watch-Gold-Color-Mens-Watches-casual-Top-Brand-Luxury-Hot-Selling-Ladies-4.jpg")',
							backgroundPosition: 'center',
						}}
					>
						<div className='membership-term right'  onClick={this.clickHandler}>
							<div
								style={{
									color: 'white',
									top: '30vh',
									position: 'relative',
									textAlign: 'right',
									paddingRight: '3vw',
									fontSize: '20px',
								}}
							>
								<h1 style={{
									color: 'white',
									fontSize: '69px',
								}}>12 months</h1>
								<p >Starting from $248/month</p>
							</div>
						</div>
					</Col>
				</Row>
			</div >
		);
	}
}

export default MembershipTerm;
