import React from 'react';

import { sendMessage, isTyping } from 'react-chat-engine'

import { SendOutlined } from '@ant-design/icons'

export default class MessageForm extends React.Component {
    state = {
        value: '',
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
        isTyping(this.props, this.props.chatId)
    }
  
    handleSubmit(event) {
        event.preventDefault();

        const text = this.state.value.trim()
        if (text.length > 0 ) {
            sendMessage(
                this.props.creds, 
                this.props.chatId, 
                { text },
                () => {}
            )
        }

        this.setState({ value: '' })
    }
  
    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>

                <input 
                    style={{ 
                        height: '40px',
                        width: 'calc(100% - 110px)',
                        backgroundColor: 'white',
                        border: '1px solid white',
                        borderRadius: '6px 0px 0px 6px',
                        padding: '0px 18px',
                        outline: 'none',
                    }}
                    placeholder='Send a message...' 
                    value={this.state.value} 
                    onChange={this.handleChange.bind(this)} 
                    onSubmit={this.handleSubmit.bind(this)} 
                />
                
                <button 
                    type="submit"
                    style={{
                        height: '42px',
                        backgroundColor: 'white',
                        border: '1px solid white',
                        borderRadius: '0px 6px 6px 0px',
                        padding: '0px 18px',
                        cursor: 'pointer',
                    }}
                >

                    <SendOutlined 
                        style={{ 
                            top: '1px', 
                            position: 'relative', 
                            transform: 'rotate(-90deg)' 
                        }}
                    />

                </button>
                
            </form>
        );
    }
}
