import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';
import SubscribeFrom from 'react-mailchimp-subscribe'

class ComingSoon extends Component {

    constructor(props) {
        super(props);
        this.WrappedOptInForm = Form.create()(OptInForm);
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
                        <br /><br />
                        <this.WrappedOptInForm />
                    </Col>
                </Row>
            </div >
        );
    }
}

class OptInForm extends Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const formProps = {
            action: '//specterone.us15.list-manage.com/subscribe/post?u=3b5936bf6be301a299947c2f3&amp;id=1344a8f363',
            messages: {
                inputPlaceholder: "E-mail",
                btnLabel: "NOTIFY ME",
                sending: "Subscribing",
                success: "Please check your email to confirm subscription",
                error: "You can't subscribe with this email"
            },
            styles: {
                sending: {
                    color: "auto"
                },
                success: {
                    color: "white"
                },
                error: {
                    color: "red"
                }
            }
        }
        return (
            <div>
                <SubscribeFrom {...formProps} className='optin-form' />
            </div>
        );
    }
}



export default ComingSoon;
