import React, { Component } from 'react'

export default class TheirMessage extends Component {
    render() {
        const { message } = this.props

        return (
            <div 
                style={{
                    float: 'left',
                    marginLeft: '18px',
                    padding: '12px',
                    fontSize: '16px',
                    backgroundColor: '#CABCDC',
                    borderRadius: '6px',
                }}
            >
                { message.text }
            </div>
        );
    }
}