import React, { Component } from 'react';
import FCard from './FCard';

class Films extends Component {
    render() {
        if (this.props.show) {
            return (
                <div className="card-holder">
                    {this.props.films.map((film) => {
                        return <FCard
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