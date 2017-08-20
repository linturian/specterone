import React from 'react';
import { MainLayout } from '../layouts';
import Banner from '../components/Banner';
import { Tier } from '../components/registration';
import HowItWorks from '../components/HowItWorks';
import CollectionList from '../components/CollectionList';
import { Col, Row } from 'antd';


function Landing(props) {

    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

    return (
        <MainLayout>
            <Banner />
            <HowItWorks />
            <CollectionList />
            <Row>
                <Col xs={24} style={{ textAlign: 'center', marginTop: '3em' }}>
                    <h2>SELECT A PLAN THAT IS SUITABLE FOR YOU.</h2>
                </Col>
            </Row>
            <Tier />
            <Row style={{ margin: '1em 50px' }}>
                <Col xs={24} style={{ textAlign: 'center', marginTop: '3em' }}>
                    <h2>FAQ</h2>
                </Col>
                <Col xs={24}>
                    <table>
                        <tbody>
                            <tr>
                                <td><h3>1. Lorem ipsum dolor sit amet?</h3></td>
                            </tr>
                            <tr>
                                <td><p>{text}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
        </MainLayout>
    )
}

export default Landing;

