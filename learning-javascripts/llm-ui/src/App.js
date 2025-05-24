// import React, { useEffect } from 'react';
import './App.css';
import userIcon from './assets/user.svg'
import aiIcon from './assets/ai_chatbot.svg'
import sendIcon from './assets/send_button.svg'

import { useState } from 'react';
import { renderChatContent } from './renderChatContent.js';

function App() {
  const [input, setInput] = useState(""); // Setting up Inputs using useState.
  const [messages, setMessages] = useState([
    ]);

  const [chatHistory, setChatHistory] = useState([ // Setting up Chat History so that the context is maintained.
      { 
        role: "system", 
        content: "You are a helpful assistant." 
      },
    ]);

  const handleSend = async () => {
    const text = input;
    const userMessage = { 
      role: "user", 
      content: text, 
      isBot: false 
    };
    
    setMessages(prev => [...prev, userMessage]); // Sending the Input from Input Box into Chat Box
    setInput(""); // Clearing up the Input from Input Box

    setChatHistory([ // Adding Chat History
      ...chatHistory,
      { text, isbot: false }
    ]);

    const updatedHistory = [...chatHistory, userMessage];

    try {
      const res = await fetch("http://localhost:3001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messageBody: updatedHistory }),
      });

      const data = await res.json();
      const botReply = { 
        role: "assistant",
        content: data.reply, 
        isBot: true 
      };

      setChatHistory([...updatedHistory, botReply]);
      setMessages(prev => [...prev, botReply]); 
    } catch (err) {
      console.error("Fetch failed:", err);
    }
  };

  // const renderedMessage = renderChatContent(setMessages.botReply.content);

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
                    {/* <img className = 'chatIMG' src={message.isBot?aiIcon:userIcon} alt=""/> */}
                    <p className="txt" dangerouslySetInnerHTML={{__html: renderChatContent(message.content) }}></p>
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
