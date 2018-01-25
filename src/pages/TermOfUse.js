import React from 'react';
import { Col, Row, Collapse } from 'antd';

function TermOfUse(props) {
    return (
        <section className="white-section policy-details">
            <Row>
                <Col xs={24} className="topic" >
                    <h2>WEBSITE TERMS OF USE</h2>
                    <p>Last updated: January 24, 2018</p>
                </Col>
                <Col className="content" xs={24}>
                    <h3>1. APPLICATION OF TERMS</h3>
                    <table className="terms-of-use-content">
                        <tr>
                            <td style={{ paddingRight: '1em' }}>1.1</td>
                            <td>
                                These Terms apply to your use of the Website. By accessing and using the Website:
                                <table>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(a)</td>
                                        <td>you agree to these Terms; and</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(b)</td>
                                        <td>where your access and use is on behalf of another person (e.g. a company), you confirm that you are authorised to, and do in fact, agree to these Terms on that person’s behalf and that, by agreeing to these Terms on that person’s behalf, that person is bound by these Terms.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>1.2</td>
                            <td>If you do not agree to these Terms, you are not authorised to access and use the Website, and you must immediately stop doing so.</td>
                        </tr>
                    </table>
                </Col>
                <Col className="content" xs={24}>
                    <h3>2. CHANGES</h3>
                    <table className="terms-of-use-content">
                        <tr>
                            <td style={{ paddingRight: '1em' }}>2.1</td>
                            <td>We may change these Terms at any time by updating them on the Website. Unless stated otherwise, any change takes effect immediately. You are responsible for ensuring you are familiar with the latest Terms. By continuing to access and use the Website, you agree to be bound by the changed Terms.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>2.2</td>
                            <td>We may change, suspend, discontinue, or restrict access to, the Website without notice or liability.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>2.3</td>
                            <td>These Terms were last updated on 24 January 2018.</td>
                        </tr>
                    </table>
                </Col>
                <Col className="content" xs={24}>
                    <h3>3. DEFINITIONS</h3>
                    <p>
                        In these Terms:<br /><br />
                        <i>Including</i> and similar words do not imply any limit.<br /><br />
                        <i>Loss</i> includes loss of profits, savings, revenue or data, and any other claim, damage, loss,liability and cost, including legal costs on a solicitor and own client basis.<br /><br />
                        <i>Personal information</i> means information about an identifiable, living person<br /><br />
                        <i>Terms</i> means these terms and conditions titled Website Terms of Use<br /><br />
                        <i>Underlying System</i> means any network, system, software, data or material that underlies or is connected to the Website<br /><br />
                        <i>User ID</i> means a unique name and/or password allocated to you to allow you to access certain parts of the Website<br /><br />
                        <i>We, us or our</i> means Specter One Pte Ltd<br /><br />
                        <i>Website</i> means www.specterone.com<br /><br />
                        <i>You</i> means you or, if clause 1.1b applies, both you and the other person on whose behalf you are acting.
                    </p>
                </Col>
                <Col className="content" xs={24}>
                    <h3>4. YOUR OBLIGATIONS</h3>
                    <table className="terms-of-use-content">
                        <tr>
                            <td style={{ paddingRight: '1em' }}>4.1</td>
                            <td>You must provide true, current and complete information in your dealings with us (including when setting up an account), and must promptly update that information as required so that the information remains true, current and complete.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>4.2</td>
                            <td>If you are given a User ID, you must keep your User ID secure and:<table>
                                <tr>
                                    <td style={{ paddingRight: '1em' }}>(a)</td>
                                    <td>not permit any other person to use your User ID, including not disclosing or providing it to any other person; and</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingRight: '1em' }}>(b)</td>
                                    <td>immediately notify us if you become aware of any disclosure or unauthorised use of your User ID, by sending an email to concierge@specterone.com.</td>
                                </tr>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>4.3</td>
                            <td>You must:<table>
                                <tr>
                                    <td style={{ paddingRight: '1em' }}>(a)</td>
                                    <td>not act in a way, or use or introduce anything (including any virus, worm, Trojan horse, timebomb, keystroke logger, spyware or other similar feature) that in any way compromises, or may compromise, the Website or any Underlying System, or otherwise attempt to damage or interfere with the Website or any Underlying System; and</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingRight: '1em' }}>(b)</td>
                                    <td>unless with our agreement, access the Website via standard web browsers only and not by any other method. Other methods include scraping, deep-linking, harvesting, data mining, use of a robot or spider, automation, or any similar data gathering, extraction or monitoring method.</td>
                                </tr>
                            </table>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>4.4</td>
                            <td>You must obtain our written permission to establish a link to our Website. If you wish to do so, email your request to concierge@specterone.com</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>4.5</td>
                            <td>You indemnify us against all Loss we suffer or incur as a direct or indirect result of your failure to comply with these Terms, including any failure of a person who accesses and uses our Website by using your User ID.</td>
                        </tr>
                    </table>
                </Col>
                <Col className="content" xs={24}>
                    <h3>5. INTENLLECTUAL PROPERTY</h3>
                    <p>We (and our licensors) own all proprietary and intellectual property rights in the Website (including all information, data, text, graphics, artwork, photographs, logos, icons, sound recordings, videos and look and feel), and the Underlying Systems.</p>
                </Col>
                <Col className="content" xs={24}>
                    <h3>6. DISCLAIMERS</h3>
                    <table className="terms-of-use-content">
                        <tr>
                            <td style={{ paddingRight: '1em' }}>6.1</td>
                            <td>
                                To the extent permitted by law, we and our licensors have no liability or responsibility to you or any other person for any Loss in connection with:
                            <table>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(a)</td>
                                        <td>the Website being unavailable (in whole or in part) or performing slowly;</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(b)</td>
                                        <td>any error in, or omission from, any information made available through the Website;</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(c)</td>
                                        <td>any exposure to viruses or other forms of interference which may damage your computer system or expose you to fraud when you access or use the Website. To avoid doubt, you are responsible for ensuring the process by which you access and use the Website protects you from this; and</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(d)</td>
                                        <td>any site linked from the Website. Any link on the Website to other sites does not imply any endorsement, approval or recommendation of, or responsibility for, those sites or their contents, operations, products or operators.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>6.2</td>
                            <td>We make no representation or warranty that the Website is appropriate or available for use in all countries or that the content satisfies the laws of all countries. You are responsible for ensuring that your access to and use of the Website is not illegal or prohibited, and for your own compliance with applicable local laws.</td>
                        </tr>
                    </table>
                </Col>
                <Col className="content" xs={24}>
                    <h3>7. LIABILITY</h3>
                    <table className="terms-of-use-content">
                        <tr>
                            <td style={{ paddingRight: '1em' }}>7.1</td>
                            <td>To the maximum extent permitted by law:
                                <table>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(a)</td>
                                        <td>you access and use the Website at your own risk; and</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(b)</td>
                                        <td>we are not liable or responsible to you or any other person for any Loss under or in connection with these Terms, the Website, or your access and use of (or inability to access or use) the Website. This exclusion applies regardless of whether our liability or responsibility arises in contract, tort (including negligence), equity, breach of statutory duty, or otherwise.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>7.2</td>
                            <td>Except to the extent permitted by law, nothing in these Terms has the effect of contracting out of the Singapore Consumer Protection (Fair Trading) Act CPFTA or any other consumer protection law that cannot be excluded. To the extent our liability cannot be excluded but can be limited, our liability is limited to SGD100.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>7.3</td>
                            <td>To the maximum extent permitted by law and only to the extent clauses 7.1 and 7.2 of these Terms do not apply, our total liability to you under or in connection with these Terms, or in connection with the Website, or your access and use of (or inability to access or use) the Website, must not exceed SGD100.</td>
                        </tr>
                    </table>
                </Col>
                <Col className="content" xs={24}>
                    <h3>8. PRIVACY POLICY</h3>
                    <table className="terms-of-use-content">
                        <tr>
                            <td style={{ paddingRight: '1em' }}>8.1</td>
                            <td>You are not required to provide personal information to us, although in some cases if you choose not to do so then we will be unable to make certain sections of the Website available to you. For example, we may need to have your contact information in order to provide you with updates from our Website.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>8.2</td>
                            <td>When you provide personal information to us, we will comply with the Singapore Personal Data Protection Act 2012.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>8.3</td>
                            <td>The personal information you provide to us (including any information provided if you register for an account) is collected and may be used for communicating with you, statistical analysis, the marketing by us of products and services to you, credit checks (if necessary), and research and development.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>8.4</td>
                            <td>We may also collect technical information whenever you log on to, or visit the public version of, our Website. This may include information about the way users arrive at, browse through and interact with our Website. We may collect this type of technical information through the use of cookies and other means. Cookies are alphanumeric identifiers that we transfer to your computer’s hard drive to enable our systems to recognise your browser. If you want to disable cookies, you may do so by changing the settings on your browser. However, if you do so, you may not be able to use all of the functions on the Website. We use the technical information we collect to have a better understanding of the way people use our Website, to improve the way it works and to personalise it to be more relevant and useful to your particular needs. We may also use this information to assist in making any dvertising we display on the Website more personalised and applicable to your interests.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>8.5</td>
                            <td>
                                Generally, we do not disclose personal information to third parties for them to use for their own purposes. However, some of the circumstances in which we may do this are:
                                <table>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(a)</td>
                                        <td>to service providers and other persons working with us to make the Website available or improve or develop its functionality (e.g. we may use a third party supplier to host the Website);</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(b)</td>
                                        <td>in relation to the proposed purchase or acquisition of our business or assets; or</td>
                                    </tr>
                                    <tr>
                                        <td style={{ paddingRight: '1em' }}>(c)</td>
                                        <td>where required by applicable law or any court, or in response to a legitimate request by a law enforcement agency.</td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>8.6</td>
                            <td>Any personal information you provide to us may be stored on the secure servers of our trusted service providers, which may be located outside Singapore. This may involve the transfer of your personal information to countries which have less legal protection for personal information than Singapore.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>8.7</td>
                            <td>You have the right to request access to and correction of any of the personal information we hold about you. If you would like to exercise these rights, please email us at concierge@specterone.com</td>
                        </tr>
                    </table>
                </Col>
                <Col className="content" xs={24}>
                    <h3>9. SUSPENSION AND TERMINATION</h3>
                    <table className="terms-of-use-content">
                        <tr>
                            <td style={{ paddingRight: '1em' }}>9.1</td>
                            <td>Without prejudice to any other right or remedy available to us, if we consider that you have breached these Terms or we otherwise consider it appropriate, we may immediately, and without notice, suspend or terminate your access to the Website (or any part of it).</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>9.2</td>
                            <td>On suspension or termination, you must immediately cease using the Website and must not attempt to gain further access.</td>
                        </tr>
                    </table>
                </Col>
                <Col className="content" xs={24}>
                    <h3>10. GENERAL</h3>
                    <table className="terms-of-use-content">
                        <tr>
                            <td style={{ paddingRight: '1em' }}>10.1</td>
                            <td>If we need to contact you, we may do so by email or by posting a notice on the Website. You agree that this satisfies all legal requirements in relation to written communications.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>10.2</td>
                            <td>These Terms, and any dispute relating to these Terms or the Website, are governed by and must be interpreted in accordance with the laws of Singapore. Each party submits to the nonexclusive jurisdiction of the Courts of Singapore in relation to any dispute connected with these Terms or the Website.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>10.3</td>
                            <td>For us to waive a right under these Terms, the waiver must be in writing.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>10.4</td>
                            <td>Clauses which, by their nature, are intended to survive termination of these Terms including clauses 4.5, 5, 6, 7, 10.1, continue in force.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>10.5</td>
                            <td>If any part or provision of these Terms is or becomes illegal, unenforceable, or invalid, that part or provision is deemed to be modified to the extent required to remedy the illegality, unenforceability or invalidity. If a modification is not possible, the part or provision must be treated for all purposes as severed from these Terms. The remainder of these Terms will be binding on you.</td>
                        </tr>
                        <tr>
                            <td style={{ paddingRight: '1em' }}>10.6</td>
                            <td>These Terms set out everything agreed by the parties relating to your use of the Website and supersede and cancel anything discussed, exchanged or agreed prior to you agreeing to these Terms. The parties have not relied on any representation, warranty or agreement relating to the Website that is not expressly set out in the Terms, and no such representation, warranty or agreement has any effect from the date you agreed to these Terms.</td>
                        </tr>
                    </table>
                </Col>
            </Row >
        </section>
    )
}

export default TermOfUse;

