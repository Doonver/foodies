import React from 'react';
import './App.css';

import { useAtom } from 'jotai';
import { currUserAtom } from './atoms';

import LoginScreen from './screens/LoginScreen/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.js';
import OCRScreen from './screens/OCRScreen/OCRScreen.js';

function App() {
  //const [user, setUser] = useAtom(currUserAtom);

  return (
    <div>
      <OCRScreen/>
    </div>
  );
}

export default App;
