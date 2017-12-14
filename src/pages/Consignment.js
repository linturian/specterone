import React from 'react';
import { Col, Row, Collapse } from 'antd';
const Panel = Collapse.Panel;

function Consignment(props) {

    return (
        <section className="white-section" id="faq">
            <Row id="detailed-how-it-work">
                <Col xs={24} className="topic" >
                    <h2>WATCH & EARN</h2>
                    <p>1. Consign timepieces from your personal collection in exchange for a monthly cash return using the Specter One platform.</p>
                    <p>2. Timepieces entered into our collections are appraised, insured, and maintained by our in-house experts, and concierge team.</p>
                    <p>3. The timepieces will be part of our Specter One collection under the Consignment Program until the timepiece is returned. If required, Specter One may aid the sale of timepieces or assist members to purchase specific timepieces directly.</p>
                </Col>
                <Col className="content" xs={24} style={{marginTop: '2em' }}>
                    <h2>How Does It Work?</h2>
                    <p><b>Step 1: Describe The Watch</b><br />
                        Contact us via email sean@specterone.com or via mobile +65 9818 5995 and provide with us the details of the timepieces (e.g. Brand, Model, Year/Reference No.)
                    </p>
                </Col>
                <Col className="content" xs={24}>
                    <p><b>Step 2: Receive An Estimate </b><br />
                        Our team will work together with you to discuss any queries you might have, the terms of the consignment and provide you with an estimate.
                    </p>
                </Col>
                <Col className="content" xs={24}>
                    <p><b>Step 3: Consign The Watch</b><br />
                        Once the necessary cosmetic and mechanical inspections are done, the watches will be part of our collection and subscribed out till the end of the agreed duration of the consignment.
                    </p>
                </Col>
                <Col className="content" xs={24}>
                    <p><b>Step 4: Grow Your Bank Account</b><br />
                        Each month that your timepiece is selected and actively with a Specter One member, you will receive a direct transfer into your bank account or a mailed cheque on the agreed-upon monthly earnings.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className="topic" xs={24} style={{ textAlign: 'left', marginTop: '2em' }}>
                    <h2>FAQ</h2>
                </Col>
                <Col xs={24}>
                    <Collapse bordered={false}>
                        <Panel header="What watches would Specter One accept?" key="1">
                            <p>
                                We are interested in reviewing all types of timepieces, however approval is based on demand and the nature of the timepiece.
                            </p>
                        </Panel>
                        <Panel header="How does Specter One assess the value of a watch?" key="2">
                            <p>
                                Our team will value the watch based on current market prices, monthly potential yield rate, demand, and its physical condition.
                            </p>
                        </Panel>
                        <Panel header="Can I loan in more than one watch?" key="3">
                            <p>
                                Definitely. Feel free to contact us for more details at sean@specterone.com or +65 9818 5995. </p>
                        </Panel>
                        <Panel header="How does Specter One inspect the condition of the watch?" key="4">
                            <p>
                                Immediately after receiving the watch from you, Specter One completes a two-point inspection of the timepiece. <br />
                                <ul>
                                    <li>
                                        <i>Visual Inspection</i>: We will document and take photos of any scratches from wear, cracks or chipping of the crystal, case, and bracelet or strap.
                                    </li>
                                    <li>
                                        <i>Watch Functionality</i>: We will manually wind the watch, monitor the movement and check the functionality of the complications if necessary, and the closing of the watch clasp.
                                    </li>
                                </ul>
                                Specter One will document and inform the owner anything that is not working as it should be. At no time will we open your watch without your consent. </p>
                        </Panel>
                        <Panel header="Does Specter One offers to repair consigned watches?" key="5">
                            <p>
                            With your consent, Specter One will inform you of any minor or major repairs required, be it cosmetic or mechanical. Such costs will be factored into the final agreed-upon monthly offer. However, it is important to note that no repairs will be done without your approval. At no time will we open your watch without your consent.
                            </p>
                        </Panel>
                        <Panel header="Is there a minimum loan in period?" key="6">
                            <p>
                            Yes. To ensure it is worth your time and ours to do so, we expect a loan-in period of at least 3 months. However, the team is flexible and open to discussion. 
                            </p>
                        </Panel>
                        <Panel header="How would I get paid?" key="7">
                            <p>
                            For each time period that the watch is actively consigned in the Specter One collection, we will pay the owner the agreed upon amount via bank transfer or mail a cheque. 
                            </p>
                        </Panel>
                        <Panel header="What if my watch is lost, stolen or damaged?" key="8">
                            <p>
                            All of the watches in the Specter One collection, including consigned watches, are insured. In the unlikely event that your watch is lost or stolen, Specter One will refund you the full appraised value originally quoted in your accepted consignment agreement. We will also ensure that watches will be maintained and free of damages before returning them to you.
                            </p>
                        </Panel>
                    </Collapse>
                </Col>
            </Row>
        </section >
    )
}

export default Consignment;

