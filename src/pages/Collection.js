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
            <section>
                <Row><Col xs={24} style={{ textAlign: 'center', padding: '0 0 1.5em 0' }}><h1 style={{ fontWeight: 'bolder' }}>COLLECTION</h1></Col></Row>
                <TierCollection watchList={enthusiastCollection} tierName="ENTHUSIAST" />
                <TierCollection watchList={aficionadoCollection} tierName="AFICIONADO" />
            </section>
        )
    }
}

export default Collection;

