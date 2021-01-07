import React, { Component } from 'react'

export default class MyMessage extends Component {
    render() {
        const { message } = this.props
        return (
            <div 
                style={{
                    float: 'right',
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