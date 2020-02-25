import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';

const BASE_URL = 'http://ghibliapi.herokuapp.com/';

class App extends Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        fetch(BASE_URL + 'films')
        .then(response => response.json())
        .then(object => console.log(object));
    }
    render() {
        return (
            <div id="app-container">
                <h1>studio ghibli api.</h1>
            </div>
        )
    }
}

export default App;