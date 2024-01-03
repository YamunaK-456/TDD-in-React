// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
import {useState} from 'react';
import NewMessageForm from './NewMessageForm';
import MessageList from './MessageList';

export default function App(){
  const [messages,setMessages]=useState([]);
  function handleSend(newMessage){
    setMessages([newMessage,...messages]);
  }

  return (
    <>
    <NewMessageForm onSend={handleSend} />
    <MessageList data={messages}/>
    </>
  )
  
}
