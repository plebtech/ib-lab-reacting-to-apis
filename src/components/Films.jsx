import React, { Component } from 'react';
import Card from './Card';

const BASE_URL = 'http://ghibliapi.herokuapp.com/';

class Films extends Component {
    render() {
        if (this.props.showFilms) {
            return (
                <div id="card-holder">
                    {this.props.films.map((film) => {
                        return <Card
                            key={film.id}
                            title={film.title}
                            description={film.description}
                            release={film.release_date}
                            rt={film.rt_score}
                        />
                    })}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default Films;