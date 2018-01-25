import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { withRouter } from 'react-router-dom';

class TierList extends Component {

    render() {
        return (
            <section id="tier-list" className="dark-theme">
                <Row>
                    <Col className="section-title" xs={24}>
                        <p className="section-title-more">
                            ENJOY WATCHES THROUGH
                        </p>
                        <h1>MONTHLY <span>SUBSCRIPTION</span></h1>
                        <br />
                        <h1>$247/month</h1><p>($7.96/day)</p>
                    </Col>
                </Row>
                <Row className="section-content" type="flex" justify="center">
                    {/* <WatchItem imgSrc="img/collection/aquaracer-300m-43mm.png" /> */}
                    <WatchItem imgSrc="img/collection/bell-ross.png" />
                    <WatchItem imgSrc="img/collection/iwc-b.png" />
                    <WatchItem imgSrc="img/collection/iwc-w.png" />
                    <WatchItem imgSrc="img/collection/omega-soldier.png" />
                    <WatchItem imgSrc="img/collection/radiomir-panerai-l.png" />
                    <WatchItem imgSrc="img/collection/radiomir-panerai.png" />
                    <WatchItem imgSrc="img/collection/tag-heuer-formula-1.png" />
                    <WatchItem imgSrc="img/collection/tudor-genve-b.png" />
                    {/* <WatchItem imgSrc="img/collection/tudor-genve-g.png" /> */}


                </Row>
                {/* <Row id="view-all-models">
                    <ViewCollectionBtn />
                </Row> */}
            </section >
        );
    }
}

const ViewCollectionBtn = withRouter(({ history }) => (
    <Button
        type='primary'
        onUpdate={() => window.scrollTo(0, 0)}
        onClick={() => { history.push('/collection') }}
    >
        View All Models
  </Button>
));

class WatchItem extends Component {
    render() {
        return (
            <Col xs={12} md={3} className="content-center">
                <img style={{ width: '100%', padding: '5px' }} src={this.props.imgSrc} />
            </Col>
        );
    }
}

export default TierList