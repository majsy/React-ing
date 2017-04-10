import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {items: []}
    }

    componentWillMount() {
        fetch( 'http://swapi.co/api/people/?format=json' )
            .then( response => response.json() )
            .then( ({results: items}) => (this.setState({items})) )
    }

    filter(e) {
       this.setState({filter: e.target.value})
    }

    render() {
        let items = this.state.items;
        return (
            <div>
                <input type="text"
                onChange={this.filter.bind(this)} />
                {items.map(item => <h4 key={item.name}>{item.name}</h4>)}
            </div>
        )
    }
}
