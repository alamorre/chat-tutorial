import React, { Component } from 'react'

export default class TheirMessage extends Component {
    render() {
        const { lastMessage, message } = this.props
        const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

        return (
            <div style={{ float: 'left', display: 'flex', marginLeft: '18px' }}>

                {
                    isFirstMessageByUser &&
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
                            backgroundSize: '48px',
                        }} 
                    />
                }

                <div 
                    style={{
                        float: 'left',
                        marginLeft: isFirstMessageByUser ? '4px' : '48px',
                        padding: '12px',
                        fontSize: '16px',
                        backgroundColor: '#CABCDC',
                        borderRadius: '6px',
                        maxWidth: '60%',
                    }}
                >
                    { message.text }
                </div>

            </div>
        );
    }
}