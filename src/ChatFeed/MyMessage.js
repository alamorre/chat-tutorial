import React, { Component } from 'react'

export default class MyMessage extends Component {
    render() {
        return (
            <div 
                style={{
                    float: 'right',
                    marginRight: '18px',
                    padding: '12px',
                    fontSize: '16px',
                    color: 'white',
                    backgroundColor: '#3B2A50',
                    borderRadius: '6px',
                }}
            >
                { this.props.message.text }
            </div>
        );
    }
}