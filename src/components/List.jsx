import React, { Component } from 'react';
import Card from './Card';

class List extends Component {
    render() {
        if (this.props.show) {
            return (
                <div id="card-holder">
                    {this.props.films.map((film) => {
                        return <Card
                            id={film.id}
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

export default List;