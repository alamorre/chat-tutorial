import React, { Component } from 'react'

import _ from 'lodash'

import MessageForm from './MessageForm'

export default class ChatFeed extends Component {
    renderMessages() {
        return _.map(this.props.messages, (message, index) => {
            return (
                <div>
                    <div 
                        key={`msg_${index}`}
                        style={{
                            padding: '12px',
                            fontSize: '16px',
                            display: 'inline-block',
                            backgroundColor: 'white',
                        }}
                    >
                        { message.text }
                    </div>
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
                backgroundColor: '#722ed1',
                // backgroundImage: 'url(https://chat-engine-assets.s3.amazonaws.com/chat-feed-min.png)', 
            }}>

                {/* Chat Title Section */}
                <div style={{ width: '100%', textAlign: 'center', padding: '18px' }}>
                
                    <div style={{ color: 'white', fontWeight: '800', fontSize: '24px' }}>
                        { chat.title }
                    </div>

                    <div style={{ color: '#f0f0f0', fontWeight: '600', fontSize: '12px', paddingTop: '4px' }}>
                        { chat.people.map(person => ' ' + person.person.username) }
                    </div>

                </div>

                {/* Chat Messages */}
                <div>

                    { this.renderMessages() }

                </div>

                {/* Message Form */}
                <div style={{ position: 'absolute', bottom: '0px', width: '100%', padding: '18px' }}>

                    <MessageForm {...this.props} chatId={this.props.activeChat} />

                </div>

            </div>
        );
    }
}