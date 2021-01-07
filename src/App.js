import './App.css';

import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './ChatFeed'

const users = [
  {
    userName: 'Alice',
    userSecret: 'pass1234',
  },
  {
    userName: 'Bob',
    userSecret: 'pass1234',
  },
  {
    userName: 'Wendy',
    userSecret: 'pass1234',
  },
  {
    userName: 'Zack',
    userSecret: 'pass1234',
  }
]

function App() {
  const user = users[Math.floor(Math.random() * users.length)]
  
  return (
    <ChatEngine 
      height='100vh'
      projectID='52147d0e-0f43-4ea7-916f-1820a16bf1d7'
      userName={user.userName}
      userSecret={user.userSecret}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
