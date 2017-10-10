import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { withRouter } from 'react-router-dom';

class TierList extends Component {
    constructor(props) {
        super(props);

        const enthusiastLink = 'img/collection/enthusiast/';
        this.enthusiasts = [enthusiastLink + 'enthusiast-seven-friday.jpg', enthusiastLink + 'enthusiast-tagheur.jpg', enthusiastLink + 'enthusiast-tudor.jpg'];

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
                            NOW CHOOSE ON OF OUR
                        </p>
                        <h1><span>SUBSCRIPTION</span> TIERS</h1>
                    </Col>
                </Row>
                <Row className="section-content">
                    <TierItem title="ENTHUSIAST" price="starting $197/month" imgSrc={this.enthusiasts} />
                    <TierItem title="AFICIONADO" price="starting $397/month" className="middle" imgSrc={this.africionados} />
                    <TierItem title="CONNOISSEUR" price="starting $797/month" imgSrc={this.connoisseurs} />
                </Row>
                <Row id="view-all-models">
                    <ViewCollectionBtn />
                </Row>
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

class TierItem extends Component {
    render() {
        const style = {
            ...this.props.style
        }
        const className = "content-center " + this.props.className
        return (
            <Col xs={24} lg={8} className={className} style={style}>
                <Col xs={24} style={{ marginBottom: '2em' }}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.price}</p>
                </Col>
                {this.props.imgSrc.map(imgSrc => {
                    return <WatchItem imgSrc={imgSrc} />;
                })}
            </Col>
        );
    }

}

class WatchItem extends Component {
    render() {
        return (
            <Col xs={8}>
                <img style={{ width: '100%', padding: '5px' }} src={this.props.imgSrc} />
            </Col>
        );
    }
}

export default TierList