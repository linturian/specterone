import React, { Component } from 'react';
import TierCollection from '../components/collection/TierCollection';
import { Col, Row, Button, Icon } from 'antd';
import aficionadoCollection from '../content/aficionado.json';
import enthusiastCollection from '../content/enthusiast.json';


class Collection extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: '1', position: 'fixed', height: '-webkit-fill-available', width: '-webkit-fill-available' }}>
                    <h1 style={{ textAlign: 'center', lineHeight: '90vh', color: 'white', fontWeight: 'bolder', fontSize: '3em'}}>COMING SOON</h1>
                </div>
                <section>
                    <Row className="dark-theme">
                        <Col xs={24} style={{ textAlign: 'center', padding: '0 0 1.5em 0' }}>
                            <h1 style={{ fontWeight: 'bolder' }}>COLLECTION</h1>
                        </Col>
                    </Row>
                    <TierCollection watchList={enthusiastCollection} tierName="ENTHUSIAST" />
                    <TierCollection watchList={aficionadoCollection} tierName="AFICIONADO" />
                </section>
            </div>
        )
    }
}

export default Collection;

