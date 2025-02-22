import React, { useState } from 'react';
import "../styles/MainPage.css";

const MainPage = () => {
  const [userMessage, setUserMessage] = useState("");
  const [chats, setChats] = useState([
    { message: "Hello! What do you want to translate?", className: "incoming" }
  ]);

  const createChatLi = (message, className) => {
    return { message, className };
  };

  const handleChat = () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setChats((prevChats) => [
      ...prevChats,
      createChatLi(trimmedMessage, "outgoing"),
    ]);

    setUserMessage("");

    setTimeout(() => {
      setChats((prevChats) => [...prevChats, createChatLi("thinking...", "incoming")]);
    }, 600);
  };

  return (
    <div className='main'>
      <div className="header">TEXT TRANSLATOR</div>
      <div className="container">
        <ul className='chatbox'>
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
