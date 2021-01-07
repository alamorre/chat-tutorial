import React, { Component } from 'react'


import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'
import MessageForm from './MessageForm'

export default class ChatFeed extends Component {
    renderReadReceipts(message) {
        const { chats, activeChat } = this.props 
        const chat = chats && chats[activeChat]

        return chat.people.map((person, index) => {
            return person.last_read === message.id &&
            <div 
                key={`read_${index}`} 
                style={{ 
                    width: '13px',
                    height: '13px',
                    borderRadius: '13px',
                    margin: '0px 1.5px',
                    backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: '14px',
                }}
            />
        })
    }

    renderMessages(messages) {
        const keys = Object.keys(messages)

        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index - 1]
            const isMyMessage = this.props.userName === message.sender.username

            return (
                <div key={`msg_${index}`} style={{ width: '100%', display: 'inline-block' }}>
                    
                    {
                        isMyMessage ?
                        <MyMessage message={message} /> :
                        <TheirMessage 
                            lastMessage={messages[lastMessageKey]} 
                            message={message} 
                        />
                    }
                    
                    <div 
                        style={{ 
                            width: '100%',
                            display: 'flex',
                        }}
                    >
                        { this.renderReadReceipts(message) }
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
                backgroundColor: 'rgb(240, 240, 240)', //'#7554A0', // F4F1F8, DFD6EA, CABCDC, B5A1CE, A087C0, 8A6CB2, 7554A0, 624686, 4E386B, 3B2A50
            }}>

                <div style={{ width: 'calc(100% - 36px)', padding: '18px' , textAlign: 'center'}}>
                
                    <div style={{ color: '#7554A0', fontWeight: '800', fontSize: '24px' }}>
                        { chat.title }
                    </div>

                    <div style={{ color: '#7554A0', fontWeight: '600', fontSize: '12px', paddingTop: '4px' }}>
                        { chat.people.map(person => ' ' + person.person.username) }
                    </div>

                </div>

                <div>

                    { this.renderMessages(this.props.messages) }

                </div>

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