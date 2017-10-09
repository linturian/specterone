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
                <Row id="detailed-how-it-work">
                    <Col className="topic" xs={24} style={{ textAlign: 'left' }}>
                        <h2>How It Works?</h2>
                        <p>Your luxury watch collection</p>
                        <p>Get access to an unparalleled range of luxury watches</p>
                    </Col>
                    <Col className="content" xs={24}>
                        <p><b>Step 1: Membership and approval</b><br />
                            Fill out an application form online and our representative will reach out to confirm your membership status through a vetting process. This procedure will not take more than 3 days. </p>
                    </Col>
                    <Col className="content" xs={24}>
                        <p><b>Step 2: Customise your watch profile </b><br />
                            Build your unique watch profile by picking your favourites from our collection. Choose your next timepiece and our personal concierge will meet you to deliver the desired watch. The process will also include payment and the Specter One membership agreement.
                    </p>
                    </Col>
                    <Col className="content" xs={24}>
                        <p><b>Step 3: Return</b><br />
                            A week or more before each upcoming rotation, our personal concierge will contact you to advise of the watch we have paired based on your unique watch profile. Upon confirmation, we will personally meet you to receive the current watch and send you the new one.
                    </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="topic" xs={24} style={{ textAlign: 'left', marginTop: '2em', marginBottom: '3em' }}>
                        <h2>What Are The Monthly Subscription Charges?</h2>
                        <p>
                            We offer plans across a range of collections based on a tier system. Our membership plans only offer watches for 2-month rotations regardless of duration - Members only enjoy each watch for 2 months at a time.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col className="topic" xs={24} style={{textAlign: 'left'}}>
                        <h2>FAQ</h2>
                        <p>Questions? We’ve got your answers here.</p>
                    </Col>
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

