import React, { useState } from 'react';
import "../styles/MainPage.css";

const API_KEY = "ApeGwKE+YwXWbBf5ZE7IM/rhbPD6tsQiYKR03V5Fkj53/HabufshircKY67L/uj7/zFhliLTpmDVWpO/kHBdtg0AAAB6eyJvcmlnaW4iOiJodHRwczovL3RleHQtcHJvY2Vzc29yLWVpZ2h0LnZlcmNlbC5hcHA6NDQzIiwiZmVhdHVyZSI6IlRyYW5zbGF0aW9uQVBJIiwiZXhwaXJ5IjoxNzUzMTQyNDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZX0=";

const translateText = async (text, targetLang) => {
  try {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        q: text,
        target: targetLang
      })
    });
    
    const data = await response.json();
    console.log("API Response:", data); 
    
    if (!data.data || !data.data.translations) {
      throw new Error("Invalid response from API");
    }
    
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation Error:", error);
    return "Error: Unable to translate. Please try again.";
  }
};

const MainPage = () => {
  const [userMessage, setUserMessage] = useState("");
  const [targetLang, setTargetLang] = useState("es"); 
  const [chats, setChats] = useState([
    { message: "Hello! What do you want to translate?", className: "incoming" }
  ]);

  const createChatLi = (message, className) => {
    return { message, className };
  };

  const handleChat = async () => {
    const trimmedMessage = userMessage.trim();
    if (!trimmedMessage) return;

    setChats((prevChats) => [...prevChats, createChatLi(trimmedMessage, "outgoing")]);
    setUserMessage("");

    setTimeout(async () => {
      setChats((prevChats) => [...prevChats, createChatLi("thinking...", "incoming")]);
      const translatedText = await translateText(trimmedMessage, targetLang);
      setChats((prevChats) => [...prevChats, createChatLi(translatedText, "incoming")]);
    }, 600);
  };

  return (
    <div className='main'>
      <div className="header">AI TRANSLATOR</div>
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
            placeholder='Type something...' 
            required 
            value={userMessage} 
            onChange={(e) => setUserMessage(e.target.value)}
          ></textarea>
          <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
            <option value="zh">Chinese</option>
          </select>
          <span id="translate-btn" onClick={handleChat}>Translate</span>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
