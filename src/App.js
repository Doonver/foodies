import React from 'react';
import './App.css';

import { useAtom } from 'jotai';
import { currUserAtom, currPageAtom } from './atoms';

import LoginScreen from './screens/LoginScreen/LoginScreen.js';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.js'
import HomeScreen from './screens/HomeScreen/HomeScreen.js';
import PantryScreen from './screens/PantryScreen/PantryScreen.js';

function App() {
  const [user, setUser] = useAtom(currUserAtom);
  const [page, setPage] = useAtom(currPageAtom);

  setUser('Denver Nguyen')
  return (
    <div>
      {user ? (
        <div className="App">
          {page === "Pantry" && <PantryScreen/>}
          {page === "Home" && <HomeScreen/>}
          {page === "Profile" && <ProfileScreen/>}
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
