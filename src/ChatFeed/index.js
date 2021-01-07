import React, { Component } from 'react'


import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
import MessageForm from './MessageForm'

export default class ChatFeed extends Component {
    renderMessages(messages) {
        const keys = Object.keys(messages)

        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const nextMessageKey = index === keys.length - 1 ? null : keys[index + 1]

            return (
                <div key={`msg_${index}`} style={{ width: '100%', display: 'inline-block', }}>
                    {
                        this.props.userName === message.sender.username ?
                        <MyMessage 
                            lastMessage={messages[lastMessageKey]} 
                            message={message} 
                            nextMessage={messages[nextMessageKey]} 
                        /> :
                        <TheirMessage 
                            lastMessage={messages[lastMessageKey]} 
                            message={message} 
                            nextMessage={messages[nextMessageKey]} 
                        />
                    }
                </div>
            )
        })
    }

    render() {
        const { chats, activeChat } = this.props 
        const chat = chats && chats[activeChat]

        if (!chat) return <div />

        return (
            <div style={{ 
                height: '100%',
                width: '100%', 
                backgroundColor: 'rgb(240, 240, 240)', //'#7554A0', // F4F1F8, DFD6EA, CABCDC, B5A1CE, A087C0, 8A6CB2, 7554A0, 624686, 4E386B, 3B2A50
                // backgroundImage: 'url(https://chat-engine-assets.s3.amazonaws.com/chat-feed-min.png)', 
            }}>

                {/* Chat Title Section */}
                <div style={{ width: 'calc(100% - 36px)', padding: '18px' , textAlign: 'center'}}>
                
                    <div style={{ color: '#7554A0', fontWeight: '800', fontSize: '24px' }}>
                        { chat.title }
                    </div>

                    <div style={{ color: '#7554A0', fontWeight: '600', fontSize: '12px', paddingTop: '4px' }}>
                        { chat.people.map(person => ' ' + person.person.username) }
                    </div>

                </div>

                {/* Chat Messages */}
                <div>

                    { this.renderMessages(this.props.messages) }

                </div>

                {/* Message Form */}
                <div 
                    style={{ 
                        position: 'absolute', 
                        bottom: '0px', 
                        width: 'calc(100% - 36px)', 
                        padding: '18px', 
                        backgroundColor: 'rgb(240, 240, 240)', //'#7554A0' 
                    }}
                >

                    <MessageForm {...this.props} chatId={this.props.activeChat} />

                </div>

            </div>
        );
    }
}