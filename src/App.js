import React from 'react';
import { useState, useRef } from 'react';
import Tesseract from 'tesseract.js';
import preprocessImage from './preprocess';
import './App.css';

import { useAtom } from 'jotai';
import { currUserAtom, currPageAtom } from './atoms';

import LoginScreen from './screens/LoginScreen/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.js'
import HomeScreen from './screens/HomeScreen/HomeScreen.js';
import PantryScreen from './screens/PantryScreen/PantryScreen.js';
import OCRScreen from './screens/OCRScreen/OCRScreen.js';

function App() {
  const [image, setImage] = useState("");
  const [text, setText] = useState("");
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
 
  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]))
  }
 
  const handleClick = () => {
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
 
    ctx.drawImage(imageRef.current, 0, 0);
    ctx.putImageData(preprocessImage(canvas),0,0);
    const dataUrl = canvas.toDataURL("image/jpeg");
  
    Tesseract.recognize(
      dataUrl,'eng',
      { 
        logger: m => console.log(m) 
      }
    )
    .catch (err => {
      console.error(err);
    })
    .then(result => {
      // Get Confidence score
      let confidence = result.confidence
      console.log(confidence)
      // Get full output
      let text = result.text
  
      setText(text);
    })
  }
 
  return (
    <div className="App">
      <main className="App-main">
        <h3>Actual image uploaded</h3>
        <img 
           src={image} className="App-logo" alt="logo"
           ref={imageRef} 
           />
        <h3>Canvas</h3>
        <canvas ref={canvasRef} width={700} height={250}></canvas>
          <h3>Extracted text</h3>
        <div className="pin-box">
          <p> {text} </p>
        </div>
        <input type="file" onChange={handleChange} />
        <button onClick={handleClick} style={{height:50}}>Convert to text</button>
      </main>
    </div>
  );
}

export default App;

//const [user, setUser] = useAtom(currUserAtom);
  //const [page, setPage] = useAtom(currPageAtom);

  // return (
  //   <div>
  //     {user ? (
  //       <div className="App">
  //         {page === "Pantry" && <PantryScreen/>}
  //         {page === "Home" && <HomeScreen/>}
  //         {page === "Profile" && <ProfileScreen/>}
  //       </div>
  //     ) : (
  //       <div className="App">
  //         <LoginScreen/>
  //       </div>
        
  //     )}
  //     <OCRScreen/>s
  //   </div>
  // );
