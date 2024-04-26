import React from 'react';
import './App.css';

import { useAtom } from 'jotai';
import { currUserAtom, currPageAtom } from './atoms';

import LoginScreen from './screens/LoginScreen/LoginScreen.js';
<<<<<<< HEAD
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.js';
import OCRScreen from './screens/OCRScreen/OCRScreen.js';

function App() {
  //const [user, setUser] = useAtom(currUserAtom);

  return (
    <div>
      <OCRScreen/>
=======
import ProfileScreen from './screens/ProfileScreen/ProfileScreen.js'
import HomeScreen from './screens/HomeScreen/HomeScreen.js';
import PantryScreen from './screens/PantryScreen/PantryScreen.js';

function App() {
  const [user, setUser] = useAtom(currUserAtom);
  const [page, setPage] = useAtom(currPageAtom);

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
>>>>>>> 34f4ff75a1e6346e206cd9957d4ffa5a99ebe3ee
    </div>
  );
}

export default App;
