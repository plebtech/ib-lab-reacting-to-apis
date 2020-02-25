import React, { Component } from 'react';
import 'isomorphic-fetch';
import 'es6-promise';
import Card from './Card';

const BASE_URL = 'http://ghibliapi.herokuapp.com/';
const FILMS = [];

class App extends Component {
    constructor() {
        super();
        this.state = {
            films: [...FILMS],
        }
    }
    componentDidMount() {
        // function populateFilms(object) {
        //     films = Object.keys(object).map(i => object[i]);
        // }
        fetch(BASE_URL + 'films/')
            .then(response => (response.json()))
            .then(data => {
                data.map(item => {
                    // console.log(item);
                    FILMS.push(item);
                    this.setState({
                        films: [...FILMS],
                    })
                })
            })
        }
    render() {
        return (
            <div id="app-container">
                <h1>studio ghibli api.</h1>
                <div>
                    {this.state.films.map((film) => {
                    return <Card
                        id={film.id}
                        title={film.title}
                        description={film.description}
                        release={film.release_date}
                        rt={film.rt_score}
                    />
                })}
                </div>
            </div>
        )
    }
}

export default App;