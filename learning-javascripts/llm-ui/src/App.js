import React from 'react';
import './App.css';
import userIcon from './assets/user.svg'
import aiIcon from './assets/ai_chatbot.svg'
import sendIcon from './assets/send_button.svg'

import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
      {
      content: "Hello, how can I help you?",
      isBot: true
      }
    ]);

  const handleSend = async () => {
    const newMessage = { content: input, isBot: false };

    try {
      const res = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botReply = { content: data.reply, isBot: true };

      setMessages(prev => [...prev, newMessage, botReply]);
      setInput(""); 
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };


  return (
      <div className="flex">
        <div className="sidebar">
          <img src="" alt="" className="userIcon" />This is Sidebar
        </div>
        <div className = 'main'>
          <div className = "chatBox">
            <div className="chats">
              {messages.map((message, i) => 
                  <div key = {i} className={message.isBot?"chat bot": "chat"}>
                    <img className = 'chatIMG' src={message.isBot?aiIcon:userIcon} alt=""/><p className="txt">{ message.content }</p>
                  </div>
              )}
            </div>
          </div>
          <div className = "inputBox">
            <div className = "chatInput">
              <input type = 'text' placeholder = 'Send a message' value = {input} 
              onChange = {(e) => {setInput(e.target.value)}} onKeyDown={(e) => {if (e.key === "Enter"){handleSend();}}}/> 
              <button className="send" onClick={handleSend}>
                <img className = 'sendIMG' src={sendIcon} alt="Send" /></button>
            </div>
          </div>
        </div>
      </div>
  );
}
// value = {input} onChange = {(e) => {setInput(e.target.value)}}
// onClick={handleSend}
export default App;
