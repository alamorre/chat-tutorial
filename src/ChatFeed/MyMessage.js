import React, { Component } from 'react'

export default class MyMessage extends Component {
    render() {
        const { message } = this.props

        if (message.attachments && message.attachments.length > 0) {
            return (
                <img 
                    style={{
                        float: 'right',
                        marginRight: '18px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        height: '30vw', 
                        width: '30vw', 
                        maxHeight: '200px',
                        maxWidth: '200px',
                        minHeight: '100px',
                        minWidth: '100px', 
                    }}
                    src={message.attachments[0].file}
                    alt='my-msg-img'
                />
            )
        }

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
                    maxWidth: '60%',
                }}
            >
                { message.text }
            </div>
        );
    }
}