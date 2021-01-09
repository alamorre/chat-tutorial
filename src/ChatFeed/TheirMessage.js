import React, { Component } from 'react'

export default class TheirMessage extends Component {
    render() {
        const { lastMessage, message } = this.props
        const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username

        return (
            <div style={{ float: 'left', width: '100%', display: 'flex', marginLeft: '18px' }}>

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

                {
                    message.attachments && message.attachments.length > 0 ?
                    <img
                        src={message.attachments[0].file}
                        alt='message-pic'
                        style={{
                            marginLeft: isFirstMessageByUser ? '4px' : '48px',
                            objectFit: 'cover',
                            borderRadius: '6px',
                            height: '30vw', 
                            width: '30vw', 
                            maxHeight: '200px',
                            maxWidth: '200px',
                            minHeight: '100px',
                            minWidth: '100px', 
                        }}
                    /> :
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
                }

            </div>
        );
    }
}