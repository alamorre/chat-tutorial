import './App.css';

import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './ChatFeed'

const userNames = ['Alice', 'Bob', 'Wendy', 'Zack']
const userName = userNames[Math.floor(Math.random() * userNames.length)]

function App() {
  console.log(userName)
  return (
    <ChatEngine 
      height='100vh'
      projectID='52147d0e-0f43-4ea7-916f-1820a16bf1d7'
      userName={userName}
      userSecret='pass1234'
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
}

export default App;
