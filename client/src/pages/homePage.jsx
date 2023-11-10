import React from 'react';
import Highscores from '../components/HighScores';
import Login from '../components/Login';

const Home = () => {
   return (
      <>
         <div id="highscoreSection" className="c-row">
            <h1>Welcome to Cool Dice!</h1>
            <p>
               {' '}
               Log in and compete with the computer to roll two dice, aiming to
               achieve the highest possible rolled number. Goodluck!{' '}
            </p>
            <Highscores />
         </div>
         <div id="loginSection" className="f-row">
            <Login />
         </div>
      </>
   );
};

export default Home;
