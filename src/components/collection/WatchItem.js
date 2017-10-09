import React, { Component } from 'react';

class WatchItem extends Component {

    render() {
        return (
            <div className="watch-item">
                <div className="watch-image">
                    <img src={this.props.image} />
                </div>
                <div className="watch-details">
                    <h3>{this.props.brand}</h3>
                    <p>{this.props.name}</p>
                </div>
            </div>
        );
    }
}

export default WatchItem;
