import React from 'react';
import { MainLayout } from '../layouts';
import { Col, Row, Collapse } from 'antd';
import contents from '../content/faq.json';
const Panel = Collapse.Panel;

function Faq(props) {
    let panelItems = [];

    for (let key in contents) {
        panelItems.push(<Panel header={contents[key].question} key={key}><p>{contents[key].answer}</p></Panel>);
    }



    return (
        <MainLayout>
            <section className="white-section" id="faq">
                <Row>
                    <Col className="topic" xs={24}>
                        <h2>FAQ</h2>
                        <p>Questions? We’ve got your answers here.</p>
                        <br />
                    </Col>
                </Row>
                <Row className="faq-content">
                    <Col xs={24}>
                        <Collapse bordered={false}>
                            <Panel header="What is required for membership with Specter One to be approved?" key="1">
                                <p>
                                    The application process is quick and simple, and generally completed within a few days. Upon completion of the online form,
                                </p>
                                <ul>
                                    <li>i) You will receive an auto confirmation email for your application.</li>
                                    <li>ii)	While the Concierge team evaluates your application, you will be contacted to schedule an introductory call with us.</li>
                                    <li>iii) On your introductory call, we will seek to answer any questions and verify any unresolved information in your application.</li>
                                    <li>iv)	Once approved, our Concierge will assist you in completing your unique Member profile based on your personal style, as well as selecting your first timepiece you will receive from Specter One.</li>
                                </ul>
                            </Panel>
                            {panelItems}
                        </Collapse>
                    </Col>
                </Row>
            </section >
        </MainLayout >
    )
}

export default Faq;

