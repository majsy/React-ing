import React, { Component } from 'react';

export default class Result extends Component {
    render() {
        return <div>{this.props.items.map(item => <h4 key={item.name}>{item.name}</h4>)}</div>;
    }
}
