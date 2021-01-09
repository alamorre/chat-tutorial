import React from 'react';

import { SendOutlined, PictureOutlined } from '@ant-design/icons'

import { sendMessage, isTyping } from 'react-chat-engine'

export default class MessageForm extends React.Component {
    state = { value: '' }
  
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
                { text }
            )
        }
        this.setState({ value: '' })
    }

    handleUpload(event) {
        sendMessage(
            this.props.creds, 
            this.props.chatId, 
            { files: event.target.files }
        )
    }
  
    render() {
        return (
            <form 
                onSubmit={this.handleSubmit.bind(this)} 
                style={{ 
                    overflow: 'hidden',
                    borderRadius: '6px',
                    border: '1px solid #3B2A50',
                    backgroundColor: 'white',
                }}
            >

                <input 
                    style={{ 
                        height: '40px',
                        width: 'calc(100% - 132px)',
                        backgroundColor: 'white',
                        border: '1px solid white',
                        padding: '0px 18px',
                        outline: 'none',
                        fontSize: '15px',
                    }}
                    placeholder='Send a message...' 
                    value={this.state.value} 
                    onChange={this.handleChange.bind(this)} 
                    onSubmit={this.handleSubmit.bind(this)} 
                />

                <label htmlFor="upload-button">
                    <span style={{ cursor: 'pointer', padding: '0px 12px', height: '100%' }}>
                        <PictureOutlined style={{ top: '1px', position: 'relative', fontSize: '14px' }} />
                    </span>
                </label>

                <input
                    type="file"
                    multiple={false}
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={this.handleUpload.bind(this)}
                />
                
                <button 
                    type="submit"
                    style={{
                        height: '42px',
                        backgroundColor: 'white',
                        border: '1px solid white',
                        padding: '0px 18px',
                        cursor: 'pointer',
                    }}
                >

                    <SendOutlined style={{ top: '1px', position: 'relative', transform: 'rotate(-90deg)' }} />

                </button>
                
            </form>
        )
    }
}
