import React, { Component } from 'react';
import WatchItem from './WatchItem';
import { Col, Row } from 'antd';

function TierCollection(props) {

    let watchItems = [];

   props.watchList.map((watch,index)=>{
    watchItems.push(<Col key={index} xs={12} md={6}><WatchItem name={watch['watch-name']} brand={watch.brand} image={watch['img-url']} /></Col>);
   });

    return (
        <div className="tier-collection">
            <Row>
                {watchItems}
            </Row>
        </div>
    );

}

export default TierCollection;
