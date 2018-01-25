import React from 'react';
import { Col, Row, Collapse } from 'antd';
import contents from '../content/faq.json';
const Panel = Collapse.Panel;

function PrivacyPolicy(props) {
    return (
        <section className="white-section policy-details">
            <Row>
                <Col xs={24} className="topic" >
                    <h2>SPECTER ONE PRIVACY POLICY</h2>
                    <p>Last updated: January 11, 2018</p>
                </Col>
                <Col className="content" xs={24}>
                    <p>In this policy, “we”, “us”, “our” or “Specter One” means Specter One Private Limited, “you”, “your” or “yours” means the persons to whom this policy applies.</p>
                    <br />
                    <p>The purpose of this document (“Privacy Policy”) is to inform you of how Specter One Private Limited manages Personal Data which is subject to the Singapore Personal Data Protection Act (No. 26 of 2012) (“the Act”). By interacting with us, submitting information to us, or signing up for any Products and Services offered by us, you agree and consent to this policy.<br /><br />This Privacy Policy supplements but does not supersede nor replace any other consents you may have previously provided to Specter One in respect of your Personal Data, and your consents herein are additional to any rights which to any of the Companies may have at law to collect, use or disclose your Personal Data.<br /><br />Specter One may from time to time update this Privacy Policy to ensure that this Privacy Policy is consistent with our future developments, industry trends and/or any changes in legal or regulatory requirements. Subject to your rights at law, you agree to be bound by the prevailing terms of this Privacy Policy as updated from time to time on our website (www.specterone.com/privacy-policy). Please check back regularly for updated information on the handling of your Personal Data.</p>
                </Col>
                <Col className="content" xs={24}>
                    <h3>PERSONAL DATA</h3>
                    <p>
                        In this Privacy Policy, “Personal Data” refers to any data, whether true or not, about an individual who can be identified (a) from that data; or (b) from that data and other information to which we have or are likely to have access, including data in our records as may be updated from time to time.<br /><br />
                        Examples of such Personal Data you may provide to us include (depending on the nature of your interaction with us) your name, NRIC, passport or other identification number, telephone number(s), mailing address, email address, network data and any other information relating to any individuals which you have provided us in any forms you may have submitted to us, or via other forms of interaction with you.
                    </p>
                </Col>
                <Col className="content" xs={24}>
                    <h3>COLLECTION OF PERSONAL DATA</h3>
                    <p>
                        Generally, we collect Personal Data in the following ways:
                        <ul style={{paddingLeft: '1.5em'}}>
                            <li>(a) when you submit an application form or other forms relating to any of our Products and Services (defined below);</li>
                            <li>(b) when you interact with our customer service officers, for example, via telephone calls, letters, face-to-face meetings and emails</li>
                            <li>(c) when you use some of our services, for example, websites and apps including establishing any online accounts with us</li>
                            <li>(d) when you request that we contact you, be included in an email or other mailing list</li>
                            <li>(e) when you respond to our promotions, initiatives or to any request for additional Personal Data</li>
                            <li>(f) when you are contacted by, and respond to, our marketing representatives and customer service officers</li>
                            <li>(g) when we receive references from business partners and third parties, for example, where you have been referred by them;</li>
                            <li>(h) when we seek information from third parties about you in connection with the Products and Services you have applied for;</li>
                            <li>(i) when you submit your Personal Data to us for any other reasons.</li>
                        </ul>
                        <br/>
                        When you browse our website, you generally do so anonymously but please see the section below on cookies. We do not at our website automatically collect Personal Data unless you provide such information or login with your account credentials.<br/><br/>If you provide us with any Personal Data relating to a third party (e.g. information of your spouse, children, parents, and/or employees), by submitting such information to us, you represent to us that you have obtained the consent of the third party to provide us with their Personal Data for the respective purposes.<br/><br/>You should ensure that all Personal Data submitted to us is complete, accurate, true and correct. Failure on your part to do so may result in our inability to provide you with the Products and Services you have requested.
                    </p>
                </Col> 
                <Col className="content" xs={24}>
                    <h3>PURPOSES FOR THE COLLECTION, USE AND DISCLOSURE OF YOUR PERSONAL DATA</h3>     
                    <p>
                        Generally, Specter One collects, uses and discloses your Personal Data for the following purposes:
                        <ul style={{paddingLeft: '1.5em'}}>
                            <li>(a) responding to your queries and requests;</li>
                            <li>(b) managing the administrative and business operations of Specter One and complying with internal policies and procedures;</li>
                            <li>(c) facilitating business asset transactions (which may extend to any mergers, acquisitions or asset sales) involving any of the Companies;</li>
                            <li>(d) matching any Personal Data held which relates to you for any of the purposes listed herein;</li>
                            <li>(e) resolving complaints and handling requests and enquiries;</li>
                            <li>(f) preventing, detecting and investigating crime and analyzing and managing commercial risks;</li>
                            <li>(g) providing media announcements and responses;</li>
                            <li>(h) monitoring or recording phone calls and customer-facing interactions for quality assurance, employee training and performance evaluation and identity verification purposes;</li>
                            <li>(i) organising promotional events;</li>
                            <li>(j) legal purposes (including but not limited to obtaining legal advice and dispute resolution);</li>
                            <li>(k) conducting investigations relating to disputes, billing or fraud;</li>
                            <li>(l) purposes which are reasonably related to the aforesai.</li>
                        </ul>
                        <br/>
                        In addition, Specter One collects, uses and discloses your Personal Data for the following purposes:
                        <ul style={{paddingLeft: '1.5em'}}>
                            <li>(a) analysing your use of our Products and Services so as to help us improve, review, develop and efficiently manage the Products and Services offered to you;</li>
                            <li>(b) purposes which are reasonably related to the aforesaid.</li>
                        </ul>
                        <br/>
                        Furthermore, where permitted under the Act: Specter One may also collect, use and disclose your Personal Data for the following “Specter One Additional Purposes”:
                        <ul style={{paddingLeft: '1.5em'}}>
                            <li>(i) analytics and tracking, including facilitating the sale of analytical data;</li>
                            <li>(ii) conducting market research and surveys to enable us to understand and determine customer location, preferences and demographics to develop marketing programmes in relation to Specter One's Products and Services, and to improve our service delivery and your customer experience at our showroom;</li>
                            <li>(iii) providing additional Products and Services and benefits to you, including loyalty and reward programmes from Specter One;</li>
                            <li>(iv) leads generation and management for marketing Specter One's Products and Services;</li>
                            <li>(v) communicating to you advertisements involving details of our Products and Services, special offers and rewards, either to our customers generally, or which we have identified may be of interest to you (including but not limited to upselling, cross selling and telemarketing);</li>
                            <li>(vi) organising promotional events and corporate social responsibility projects;</li>
                            <li>(vii) purposes which are reasonably related to the aforesaid. In addition, where permitted under the Act and subject to the provisions of any applicable law, your Personal Data may be disclosed, for Specter One’s Additional Purposes, to the vendors or other third party service providers in connection with promotions and services offered by Specter One.</li>
                        </ul>
                        <br/>
                        If you have provided your Singapore telephone number(s) and have indicated that you consent to receiving marketing or promotional information via your Singapore telephone number(s), then from time to time, Specter One may contact you using such Singapore telephone number(s) (including via voice calls, text, fax or other means) with information about our Products and Services.<br/><br/>
                        In relation to particular Products and Services or in your interactions with us, we may also have specifically notified you of other purposes for which we collect, use or disclose your Personal Data. If so, we will collect, use and disclose your Personal Data for these additional purposes as well, unless we have specifically notified you otherwise.<br/><br/>
                        You have a choice to withdraw your consent for receiving marketing or promotional materials/communication. You may contact us using the contact details found below.<br/><br/>
                        Please be aware that once we receive confirmation that you wish to withdraw your consent for marketing or promotional materials/communication, it may take up to 30 working days for your withdrawal to be reflected in our systems. Therefore, you may still receive marketing or promotional materials/communication during this period of time. Please note that even if you withdraw your consent for the receipt of marketing or promotional materials, we may still contact you for other purposes in relation to the Products and Services that you hold or have subscribed to with Specter One.
                    </p>
                </Col>
                <Col className="content" xs={24}>
                    <h3>DISCLOSURE OF PERSONAL DATA</h3>     
                    <p>
                    Specter One will take reasonable steps to protect your Personal Data against unauthorised disclosure. Subject to the provisions of any applicable law, your Personal Data may be disclosed, for the purposes listed above (where applicable), to the following:
                        <ul style={{paddingLeft: '1.5em'}}>
                            <li>(a) Specter One’s related corporations and employees to provide content, Products and Services to you, address your questions and requests in relation to your customer accounts, subscription and billing arrangements with us as well as our Products and Services;</li>
                            <li>(b) companies providing services relating to insurance and consultancy to Specter One;</li>
                            <li>(c) agents, contractors or third party service providers who provide operational services to Specter One, such as courier services, telecommunications, information technology, payment, printing, billing, payroll, processing, technical services, training, market research or other services to Specter One;</li>
                            <li>(d) vendors or third party service providers in connection with marketing promotions and services offered by Specter One or its preferred partners;</li>
                            <li>(e) commercial shops and retailers in relation to providing rewards and benefits;</li>
                            <li>(f) external banks, credit card companies and their respective service providers;</li>
                            <li>(g) relevant government regulators, statutory boards or authorities or law enforcement agencies to comply with any laws, rules, guidelines and regulations or schemes imposed by any governmental authority;</li>
                            <li>(h) any other party to whom you authorise us to disclose your Personal Data to.</li>
                        </ul>
                    </p>
                </Col>
                <Col className="content" xs={24}>
                    <h3>USE OF COOKIES</h3>     
                    <p>
                        A cookie is a small piece of information that is placed on your computer when you visit certain websites. Specter One uses cookies on its websites for the following purposes:
                        <ul style={{paddingLeft: '1.5em'}}>
                            <li>a) enabling certain features and functions on our websites, eg. remembering your user-id, favourite channel selections, browsing and other service preferences;</li>
                            <li>(b) building up a profile of how you and other users use the website;</li>
                            <li>(c) improving the efficiency of our website;</li>
                            <li>(d) administering services to you and to advertisers;</li>
                            <li>(e) establishing usage statistics.</li>
                        </ul>
                        <br/>
                        Most internet browsers provide you the option of turning off the processing of cookies (please see the “help” section of your browser), but this may result in the loss of functionality, restrict your use of the website and/or delay or affect the way in which it operates. <br/><br/>
                        Specter One is not responsible for the Personal Data policies (including Personal Data protection and cookies), content or security of any third party websites linked to the Specter One website.
                    </p>
                </Col>
                <Col className="content" xs={24}>
                    <h3>CONTACTING US</h3>     
                    <p>
                        If you (a) have any questions or feedback relating to your Personal Data or our Data Protection Policy; (b) would like to withdraw your consent to any use of your Personal Data as set out in this Data Protection Policy; (c) would like to obtain access and make corrections to your Personal Data records, please contact Specter One via email (concierge@specterone.com)
                        <br/><br/>
                        Please note that if your Personal Data has been provided to us by a third party (e.g. a referrer), you should contact that organisation or individual to make such queries, complaints, and access and correction requests to Specter One on your behalf.<br/><br/>
                        If you withdraw your consent to any or all use of your Personal Data, depending on the nature of your request, Specter One may not be in a position to continue to provide its Products and Services to you, administer any contractual relationship in place, which in turn may also result in the termination of any agreements with Specter One, and your being in breach of your contractual obligations or undertakings. Specter One’s legal rights and remedies in such event are expressly reserved.
                    </p>
                </Col>
                <Col className="content" xs={24}>                
                    <h3>GOVERNING LAW</h3>
                    <p>This Privacy Policy and your use of this website shall be governed in all respects by the laws of Singapore.
                    </p>
                </Col>
            </Row>
        </section>
    )  
}

export default PrivacyPolicy;
                    
