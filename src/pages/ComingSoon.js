import React, { Component } from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class ComingSoon extends Component {

    constructor(props) {
        super(props);
        this.WrappedOptInForm = Form.create()(OptInForm);
    }

    render() {
        return (
            <div>
                <Row type="flex" justify="center" align="middle" style={{ height: '100vh', textAlign: 'center', backgroundPosition:'center', backgroundImage: 'url("img/comingsoon-bg.jpg")' }} >
                    <Col xs={20} >
                        <h1 style={{fontSize: '3em'}}>SPECTER ONE</h1>
                        <br/><br/><br/><br/><br/><br/>
                        <h2>COMING SOON...</h2>
                        <br /><br />
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
                // document.location.href = "mailto:lin@specterone.com&body=" + values;
                console.log('Received values of form: ', values);
            }
        });
    }

    hasErrors = (fieldsError) => {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (
            <Form layout="inline" onSubmit={this.handleSubmit}>
                <Form.Item  style={{marginTop: '1.5em'}}>
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The E-mail is invalid',
                        }, {
                            required: true, message: 'Please enter your E-mail',
                        }],
                    })(
                        <Input placeholder="E-mail" style={{width: '250px'}} />
                    )}
                </Form.Item>
                <Form.Item style={{marginTop: '1.5em'}}>
                    <Button style={{width: '150px'}}
                        htmlType="submit"
                        disabled={this.hasErrors(getFieldsError())}>
                        NOTIFY ME
                                </Button>
                </Form.Item>
            </Form>
        );
    }
}



export default ComingSoon;
