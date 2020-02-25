import React, { Component } from 'react';
import Card from './Card';

class People extends Component {
    render() {
        return (
            <div id="people-holder">
                {this.props.people.map((film) => {
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
    }
}

export default People;