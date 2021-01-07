import './App.css';

import { ChatEngine } from 'react-chat-engine'

import ChatFeed from './ChatFeed'

const users = [
  {
    userName: 'Dice',
    userSecret: 'pass1234',
  },
  {
    userName: 'Domino',
    userSecret: 'pass1234',
  },
  {
    userName: 'Key',
    userSecret: 'pass1234',
  },
  {
    userName: 'Pencil',
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
      renderChatFeed={(props, state) => console.log(props, state)}
    />
  );
}

export default App;
