import React from 'react';
import './App.css';

import { useAtom } from 'jotai';
import { currUserAtom } from './atoms';

import LoginScreen from './screens/LoginScreen/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.js'

function App() {
  const [user, setUser] = useAtom(currUserAtom);

  return (
    <div>
      {true ? (
        <div className="App">
          <ProfileScreen/>
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
