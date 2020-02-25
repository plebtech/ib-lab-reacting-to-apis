import React, { Component } from 'react';
import PCard from './PCard';

class People extends Component {
    render() {
        if (this.props.show) {
            return (
                <div className="card-holder">
                    {this.props.people.map((person) => {
                        return <PCard
                            key={person.id}
                            name={person.name}
                            url={person.url}
                            age={person.age}
                            gender={person.gender}
                        />
                    })}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default People;