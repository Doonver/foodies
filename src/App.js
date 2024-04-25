import React from 'react';
import './App.css';

import { useAtom } from 'jotai';
import { currUserAtom } from './atoms';

import LoginScreen from './screens/LoginScreen/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.js'
import HomeScreen from './screens/HomeScreen/HomeScreen.js';
import PantryScreen from './screens/PantryScreen/PantryScreen.js';

function App() {
  const [user, setUser] = useAtom(currUserAtom);
  setUser('Denver Nguyen')
  return (
    <div>
      {true ? (
        <div className="App">
          <PantryScreen/>
        </div>
      ) : (
        <div className="App">
          <LoginScreen/>
        </div>
      )}
    </div>
  );
}

export default App;
