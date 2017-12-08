import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { withRouter } from 'react-router-dom';

class TierList extends Component {
    constructor(props) {
        super(props);

        const enthusiastLink = 'img/collection/enthusiast/';
        this.enthusiasts = [enthusiastLink + 'enthusiast-tagheur.jpg', enthusiastLink + 'enthusiast-tudor.jpg'];

        const africionadoLink = 'img/collection/africionado/';
        this.africionados = [africionadoLink + 'africionado-iwc.jpg', africionadoLink + 'africionado-paneri.jpg', africionadoLink + 'africionado-rolex.jpg'];

        const connoisseurLink = 'img/collection/connoisseur/';
        this.connoisseurs = [connoisseurLink + 'connoisseur-ap.jpg', connoisseurLink + 'connoisseur-hublot.jpg', connoisseurLink + 'connoisseur-vacheron-constatin.jpg'];

    }

    clickHandler = () => {

    }

    render() {
        return (
            <section id="tier-list">
                <Row>
                    <Col className="section-title" xs={24}>
                        <p className="section-title-more">
                            ENJOY WATCHES THROUGH
                        </p>
                        <h1>MONTHLY <span>SUBSCRIPTION</span></h1>
                    </Col>
                </Row>
                <Row className="section-content" type="flex" justify="center">
                    
    
                    {this.enthusiasts.map(imgSrc => {
                        return <WatchItem imgSrc={imgSrc} />;
                    })}
                    {this.africionados.map(imgSrc => {
                        return <WatchItem imgSrc={imgSrc} />;
                    })}
                    {this.connoisseurs.map(imgSrc => {
                        return <WatchItem imgSrc={imgSrc} />;
                    })}
                   
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