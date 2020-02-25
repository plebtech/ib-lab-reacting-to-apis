import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div key={this.props.id} class="card">
                <h2>{this.props.title}</h2>
                <h4>
                    <span>rt: {this.props.rt}</span>
                    <span>release: {this.props.release}</span>
                </h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default Card;