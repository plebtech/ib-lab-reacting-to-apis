import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Films from './Films';
import People from './People';
import logo from './logo.svg';

const BASE_URL = 'http://ghibliapi.herokuapp.com/';

class App extends Component {
    constructor() {
        super();
        this.toggleFilms = this.toggleFilms.bind(this);
        this.togglePeople = this.togglePeople.bind(this);
        this.state = {
            films: [],
            people: [],
            buttonFilmsText: 'Show films',
            buttonPeopleText: 'Show people',
            showFilms: false,
            showPeople: false,
        }
    }
    componentDidMount() {
        // function populateFilms(object) {
        //     films = Object.keys(object).map(i => object[i]);
        // }

    }
    toggleFilms() {
        this.loadFilms();
        if (this.state.showFilms === true) {
            this.setState({ buttonFilmsText: 'Show films' });
        } else {
            this.setState({ buttonFilmsText: 'Hide films' });
        }
        this.setState({ showFilms: !this.state.showFilms, showPeople: false, buttonPeopleText: 'Show people', });
    }
    loadFilms() {
        fetch(BASE_URL + 'films/')
            .then(response => (response.json()))
            .then(data => this.setState({ films: data }))
            .catch(err => console.log(err));
    }
    togglePeople() {
        this.loadPeople();
        if (this.state.showPeople === true) {
            this.setState({ buttonPeopleText: 'Show people' });
        } else {
            this.setState({ buttonPeopleText: 'Hide films' });
        }
        this.setState({ showPeople: !this.state.showPeople, showFilms: false, buttonFilmsText: 'Show films', })
    }
    loadPeople() {
        fetch(BASE_URL + 'people/')
            .then(response => (response.json()))
            .then(data => this.setState({ people: data }))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div id="app-container">
                <div id="controls">
                    <img src={logo} alt="studio ghibli" />
                    <h1>studio ghibli api.</h1>
                    <button
                        onClick={this.toggleFilms}>
                        {this.state.buttonFilmsText}
                    </button>
                    <button
                        onClick={this.togglePeople}>
                        {this.state.buttonPeopleText}
                    </button>
                </div>
                <Films films={this.state.films} show={this.state.showFilms} />
                <People people={this.state.people} show={this.state.showPeople} />
            </div>
        );
    }
}

export default App;