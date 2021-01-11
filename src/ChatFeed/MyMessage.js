import React, { Component } from 'react'

export default class MyMessage extends Component {
    render() {
        const { message } = this.props

        if (message.attachments && message.attachments.length > 0) {
            return (
                <img 
                    src={message.attachments[0].file}
                    alt='message-image'
                    className='message-image'
                    style={{ float: 'right' }}
                />
            )
        }

        return (
            <div 
                className='message'
                style={{
                    float: 'right',
                    marginRight: '18px',
                    color: 'white',
                    backgroundColor: '#3B2A50',
                }}
            >
                { message.text }
            </div>
        );
    }
}