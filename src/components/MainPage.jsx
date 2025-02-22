import React from 'react'
import "../styles/MainPage.css"

const MainPage = () => {
  return (
    <div className='main'>
        <div className="header">
                TEXT TRANSLATOR
                </div>
        <div className="container">
            <ul className='chatbox'>
                <li className="chat incoming">
                    <span >AI</span>
                    <p>hello <br /> what do you want to translate</p>
                </li>
                <li className="chat outgoing">
                    
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat!</p>
                </li>
            </ul>
            <div className="chat-input">
                <textarea placeholder='type something'></textarea> <span id="translate-btn"> translate</span>
                <span id="translate-btn"> summarize</span>
            </div>
            
            </div>
            

            
    </div>
  )
}

export default MainPage