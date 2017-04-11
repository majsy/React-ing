import React, { Component } from 'react';
import Result from './Result';

export default class App extends Component {
    constructor() {
        super();
        this.state = {items: []}
    }

    componentWillMount() {
        console.log(' will mount');

        fetch( 'http://swapi.co/api/people/?format=json' )
            .then( response => response.json() )
            .then( ({results: items}) => (this.setState({items})) )
    }

    filter(e) {
        this.setState({filter: e.target.value})
    }

    render() {
        let items = this.state.items;
        if(this.state.filter) {
            items = items.filter(item =>
                item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }

        return (
            <div>
                <input type="text" onChange={this.filter.bind(this)} />
                <Result items={items} />
            </div>
        )
    }
}
