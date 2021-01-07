import React, { Component } from 'react'

export default class TheirMessage extends Component {
    render() {
        const { message } = this.props
        return (
            <div 
                style={{
                    float: 'left',
                    padding: '12px',
                    fontSize: '16px',
                    backgroundColor: 'white',
                }}
            >
                { message.text }
            </div>
        );
    }
}