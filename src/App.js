import React from 'react';
import './App.css';

import { useAtom } from 'jotai';
import { currUserAtom } from './atoms';

import LoginScreen from './screens/LoginScreen/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.js'
import HomeScreen from './screens/HomeScreen/HomeScreen.js';

function App() {
  const [user, setUser] = useAtom(currUserAtom);
  setUser('Denver Nguyen')
  return (
    <div>
      {user ? (
        <div className="App">
          <HomeScreen/>
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
