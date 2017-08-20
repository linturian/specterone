import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class CollectionList extends Component {
    render() {
        return (
            <Row style={{ margin: '0px 50px' }}>
                <Col xs={24} style={{ textAlign: 'center', marginTop: '3em' }}>
                    <h2>COLLECTION</h2>
                </Col>
                <Col>
                    sth here
                </Col>
            </Row>
        );
    }
}

export default CollectionList