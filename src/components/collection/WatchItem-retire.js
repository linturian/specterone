import React, { Component } from 'react';
import { Card, Button } from 'antd';

class WatchItem extends Component {

    render() {
        const { state } = this.props.watch;
        let stateDOM = '';
        let button = <Button onClick={this.props.reserveHandler}>Reserve</Button>;

        if (state == "reserved") {
            button = <Button onClick={this.props.cancelHandler}>Cancel</Button>;
            stateDOM = (<h3>RESERVED</h3>);
        }

        return (
            <Card className={`watch-card ${state}`} bordered={false} >
                <div onClick={this.props.onClick}>
                    <div className="watch-state" >
                        {stateDOM}
                    </div>
                    <div className="watch-image">
                        <img style={{ width: '100%' }}
                            src={this.props.watch.image} />
                    </div>
                    <div className="watch-details">
                        <h3>{this.props.watch.name}</h3>
                        <p>{this.props.watch.desc}</p>
                    </div>
                </div>
                <div className="watch-footer">
                    {button}
                </div>
            </Card>
        );
    }
}

export default WatchItem;