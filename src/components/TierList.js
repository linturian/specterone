import React, { Component } from 'react';
import { Card, Col, Row, Button } from 'antd';
import { Redirect } from 'react-router-dom';

class TierList extends Component {
    constructor(props){
        super(props);

        const enthusiastLink = 'img/collection/enthusiast/';
        this.enthusiasts = [enthusiastLink + 'enthusiast-seven-friday.jpg', enthusiastLink + 'enthusiast-tagheur.jpg', enthusiastLink + 'enthusiast-tudor.jpg'];
    
        const africionadoLink = 'img/collection/africionado/';
        this.africionados = [africionadoLink + 'africionado-iwc.jpg', africionadoLink + 'africionado-paneri.jpg', africionadoLink + 'africionado-rolex.jpg'];
    
        const connoisseurLink = 'img/collection/connoisseur/';        
        this.connoisseurs = [connoisseurLink + 'connoisseur-ap.jpg', connoisseurLink + 'connoisseur-hublot.jpg', connoisseurLink + 'connoisseur-vacheron-constatin.jpg'];
        
    }
    
    render() {
        return (
            <section id="tier-list">
                <Row>
                    <Col className="topic" xs={24}>
                        <h2>COLLECTION</h2>
                    </Col>
                </Row>
                <Row className="section-content">
                    <TierItem title="ENTHUSIAST" price="starting $247/month" imgSrc={this.enthusiasts}/>
                    <TierItem title="AFRICIONADO" price="starting $497/month" className="middle" imgSrc={this.africionados}/>
                    <TierItem title="CONNOISSEUR" price="starting $897/month" imgSrc={this.connoisseurs}/>
                </Row>
                <Row id="view-all-models">
                    <Button type="primary">View All Models</Button>
                </Row>
            </section >
        );
    }
}

class TierItem extends Component {
    render() {
        const style = {
            padding: '0 1em',
            ...this.props.style
        }
        const className = "content-center " + this.props.className
        return (
            <Col xs={24} md={8} className={className} style={style}>
                <Col xs={24} style={{ marginBottom: '2em' }}>
                    <span style={{ fontSize: '1.5em', fontWeight: '600' }}>{this.props.title}</span>
                    <br />
                    {this.props.price}
                </Col>
                {this.props.imgSrc.map(imgSrc=>{
                    return <WatchItem imgSrc={imgSrc}/>;
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