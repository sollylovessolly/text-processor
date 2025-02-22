import React, { useState } from 'react';
import "../styles/MainPage.css";

const MainPage = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chats, setChats] = useState([]);

  const createChatLi = (message, className) => {
    return { message, className };
  };

  const handleChat = () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;
    
    setChats([...chats, createChatLi(trimmedMessage, "outgoing")]);
    setUserMessage("");
  };

  return (
    <div className='main'>
      <div className="header">TEXT TRANSLATOR</div>
      <div className="container">
        <ul className='chatbox'>
          <li className="chat incoming">
            <span>AI</span>
            <p>hello <br /> what do you want to translate</p>
          </li>
          {chats.map((chat, index) => (
            <li key={index} className={`chat ${chat.className}`}>
              <p>{chat.message}</p>
            </li>
          ))}
        </ul>
        <div className="chat-input">
          <textarea 
            placeholder='type something' 
            required 
            value={userMessage} 
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
          <span id="translate-btn" onClick={handleChat}>translate</span>
          <span id="summarize-btn">summarize</span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;