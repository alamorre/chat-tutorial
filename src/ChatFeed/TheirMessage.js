import React, { Component } from 'react'

export default class TheirMessage extends Component {
    render() {
        const { lastMessage, message, nextMessage } = this.props
        const isLastMessageByUser = nextMessage && nextMessage.sender.username !== message.sender.username

        return (
            <div style={{ display: 'flex', marginLeft: '18px', marginBottom: isLastMessageByUser ? '12px' : '0px' }}>

                {
                    lastMessage && lastMessage.sender.username !== message.sender.username &&
                    <div 
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '22px',
                            color: 'white',
                            textAlign: 'center',
                            backgroundImage: message.sender && `url(${message.sender.avatar})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: '48px'
                        }} 
                    />
                }

                <div 
                    style={{
                        float: 'left',
                        marginLeft: '4px',
                        padding: '12px',
                        fontSize: '16px',
                        backgroundColor: '#CABCDC',
                        borderRadius: '6px',
                    }}
                >
                    { message.text }
                </div>

            </div>
        );
    }
}