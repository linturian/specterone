import React from 'react';
import { MainLayout } from '../layouts';
import Banner from '../components/Banner';
import HowItWorks from '../components/HowItWorks';
import TierList from '../components/TierList';
import Features from '../components/Features';
import WatchBrandList from '../components/WatchBrandList';
import { Col, Row } from 'antd';


function Faq(props) {

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
                        <p className="question">What is required for membership with Specter One to be approved?</p>
                        <p>
                            The application process is quick and simple, and generally completed within a few days. Upon completion of the online form,
                            </p>
                        <ul>
                            <li>i) You will receive an auto confirmation email for your application.</li>
                            <li>ii)	While the Concierge team evaluates your application, you will be contacted to schedule an introductory call with us.</li>
                            <li>iii) On your introductory call, we will seek to answer any questions and verify any unresolved information in your application.</li>
                            <li>iv)	Once approved, our Concierge will assist you in completing your unique Member profile based on your personal style, as well as selecting your first timepiece you will receive from Specter One.</li>
                        </ul>
                    </Col>
                    <Col xs={24}>
                        <p className="question">What does it mean to be on the waitlist?</p>
                        <p>
                            As we are trying to ensure that all members have an excellent selection with our timepiece collection, there is a limited number of members that we can support at any one time. As our collection grows, we will contact the members next in line when we open more slots to our service.
                        </p>
                        <p>
                            Upon subscription, you will get to select your top 3 choices from our collection, of which one will be delivered to you.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">What conditions are the timepieces in? Do I have to pay for maintenance?</p>
                        <p>
                            As we continue to grow rapidly to cater to more members, members will often receive watches that are in mint condition and have never been worn before. Moreover, every watch is mechanically and cosmetically inspected, serviced (if necessary), cleaned, resized and recalibrated before being sent to the next member after each rotation. This ensures that quality consistency in all the timepieces our members receive.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">What types of timepieces are available for rent?</p>
                        <p>
                            Our timepieces are assigned to 3 different collections – The Enthusiast, Aficionado and Connoisseur. Depending on your subscription, you can select any timepiece within the collection you have subscribed to.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">Do I choose the watches I will receive for each rotation?</p>
                        <p>
                            At the start of each membership, each member will build their unique watch profile based on their personal taste, styles and favorites. They are also invited to choose their favorites from our collection. A week before each upcoming rotation, our Concierge team will contact you to advise of the watch that we have paired based upon your profile. Watches are only delivered once we receive confirmation from you.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">How do I exchange the current watch for something new?</p>
                        <p>
                            Specter One watches are delivered and returned via complimentary, insured courier service. Simply return each timepiece along with its box provided to the courier who will collect from you personally.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">What happens if I damage or lose a timepiece? Is there insurance provided?</p>
                        <p>
                            Included in price of each monthly Specter One subscription is an insurance policy in rare events such as theft and/or severe damage. This ensures that our members’ interests are protected. Link to the policy provided soon.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">Where is Specter One available?</p>
                        <p>
                            We are currently available in Singapore, but will be expanding to other capitals in Asia soon. Feel free to email our Concierge if you want our service to come to your city as well as for collaborations and partnerships.</p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">Can I purchase any watches? What is the process like?</p>
                        <p>
                            Yes, watch retailing forms part of our daily operations as well. Whether you take a liking to a watch in our collection or the one you’re currently wearing, or even need help identifying and sourcing a watch we currently do not carry, our team is excited to work with you in securing the watch at the right price. Simply contact the Concierge team and advise what you are looking for.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">Does part of my membership fees go towards buying a watch? </p>
                        <p>
                            Yes, with every rotation, renewal and new member referral, members earn points that can be applied to every aspect of membership. For more information, contact our Concierge team and use your points to upgrade to a higher collection, extend your membership or offset a portion of the price to buy a watch from our collection.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">What happens if the timepiece I’ve selected is not available?</p>
                        <p>
                            Specter One aims to ensure that anything you’ve selected as your top 3 choices will be available but in the unfortunate scenario that it is not, please put them on your wish list to monitor their availability. Furthermore, our procurement team is always working with multiple retailers to ensure that members always have more than plenty to desire for.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">How can I cancel my subscription service?</p>
                        <p>
                            You can cancel your subscription anytime, just send an email or contact our Concierge service. Please note that we can only process your application to discontinue the subscription after your last timepiece have been received back at the main office. Kindly ensure that the timepiece along with the box is received before the end of your current billing period to avoid any additional fees. For complete details about termination and the return of our watches, see the full membership agreement.
                        </p>
                    </Col>
                    <Col xs={24}>
                        <p className="question">Is there a membership agreement I need to sign?</p>
                        <p>
                            Yes, once your application is approved, you will receive an agreement for digital signature. Here is a reference of our sample agreement.
                        </p>
                    </Col>
                </Row>
            </section >
        </MainLayout >
    )
}

export default Faq;

