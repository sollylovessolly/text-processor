import { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("fr"); // Default to French

  const handleTranslateText = async () => {
    if (!inputText) {
      setTranslatedText("Please enter text to translate.");
      return;
    }

    try {
      const response = await fetch('https://libretranslate.de/translate', { // Use an alternative instance
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: inputText,
          source: 'en', 
          target: targetLanguage,
          format: 'text',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText("Error translating text. Please try again.");
    }
  };

  return (
    <div className='container'>
      <h1 className='header'>TEXT PROCESSOR</h1>
      <textarea
        rows={6}
        placeholder='Enter text to translate'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
        <option value='fr'>French</option>
        <option value='es'>Spanish</option>
        <option value='de'>German</option>
        <option value='zh'>Chinese</option>
        <option value='pt'>Portuguese</option>
      </select>
      <button onClick={handleTranslateText}>Translate</button>

      <h2>Translated Text</h2>
      <p>{translatedText}</p>
    </div>
  );
}

export default App;