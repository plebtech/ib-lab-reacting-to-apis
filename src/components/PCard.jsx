import React, { Component } from 'react';

// const BASE_URL = 'http://ghibliapi.herokuapp.com/people/';

class PCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         url: BASE_URL + this.props.url,
    //     }
    // }
    render() {
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <h4>
                    <span>age: {this.props.age}</span>
                    <span>gender: {this.props.gender}</span>
                </h4>
                <p><a href={this.props.url} target="_new">View {this.props.name}'s info</a></p>
            </div>
        )
    }
}

export default PCard;