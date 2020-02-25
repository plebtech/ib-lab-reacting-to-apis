import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import List from './List';

const BASE_URL = 'http://ghibliapi.herokuapp.com/';
const FILMS = [];

class App extends Component {
    constructor() {
        super();
        this.toggleFilms = this.toggleFilms.bind(this);
        this.state = {
            films: [...FILMS],
            buttonText: 'Show films',
        }
    }
    componentDidMount() {
        // function populateFilms(object) {
        //     films = Object.keys(object).map(i => object[i]);
        // }
        fetch(BASE_URL + 'films/')
            .then(response => (response.json()))
            .then(data => this.setState({ films: data }))
            .catch(err => console.log(err));
        this.setState({ showFilms: false, });
    }
    toggleFilms() {
        if (this.state.showFilms === true) {
            this.setState({ buttonText: 'Show films' });
        } else {
            this.setState({ buttonText: 'Hide films' });
        }
        this.setState({ showFilms: !this.state.showFilms, });
    }
    render() {
        return (
            <div id="app-container">
                <div id="controls">
                    <img src="http://ghibliapi.herokuapp.com/images/logo.svg" alt="studio ghibli" />
                    <h1>studio ghibli api.</h1>
                    <button
                        onClick={this.toggleFilms}>
                        {this.state.buttonText}
                    </button>
                </div>
                <List films={this.state.films} show={this.state.showFilms} />

            </div>
        );
    }
}

export default App;