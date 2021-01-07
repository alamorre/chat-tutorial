import React, { Component } from 'react'

export default class MyMessage extends Component {
    render() {
        return (
            <div>
                {this.props.message.text}
            </div>
        );
    }
}