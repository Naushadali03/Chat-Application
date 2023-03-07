// import logo from './logo.svg';
import { ChatEngine } from "react-chat-engine";
import './App.css';
import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>
  return (
      <ChatEngine
            height="100vh"
            projectID="7d83dad1-44bd-4a6f-be5a-e0c0cde1abf5"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatappprops)=><ChatFeed {...chatappprops}/>}

      />
  );
}

export default App;
