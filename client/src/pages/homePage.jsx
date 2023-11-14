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
               Log in or create an account to compete with the computer to roll two dice, aiming to
               achieve the highest possible rolled number. Goodluck!{' '}
            </p>
            <Highscores />
         </div>
         <div id="loginSection" className="f-row">
            <Login />
         </div>
      </>
   )};
// import { useQuery } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import { User } from '../../../server/models';
// import LoginComponent from '../components/LoginComponent';

// const navStyles = {
   // textAlign: 'center',
// };

// const homePage = () => {
//    const { loading, data } = useQuery(QUERY_USERS);
//    const users = data?.users || [];
//    console.log(data?.users[0].scores);

//    return (
//       <main>
//          <section className="bdy-container">
//             <header>
//                <h3 style={{ ...navStyles }}>High-Scores</h3>
//             </header>
//             <section className="grid">
//                <p className="t-row grid-item-name-0">Name</p>
//                <p className="t-row grid-item-num-0">Rolls</p>
//                <p className="t-row grid-item-score-0">Wins</p>
//             </section>
//             <section className="grphc-container score-scroll block">
//                {loading
//                   ? 'loading...'
//                   : users.map((user, index) => {
//                        return (
//                           <article className="t-row gold" style={{ ...navStyles }} key={index}>
//                              <note className="grid">
//                                 <p className="tt-row grid-item-position-1">1</p>
//                                 <p
//                                    className="t-row grid-item-name-1"
//                                    id="username1"
//                                 >
//                                    {user.username}
//                                 </p>
//                                 <p className="t-row grid-item-num-1" id="cpm1">
//                                    {console.log(user.scores)}
//                                    {/* {user.scores.length > 0
//                                       ? user.scores.reduce(totalRolls)
//                                       : ''} */}
//                                 </p>
//                                 <p
//                                    className="t-row grid-item-score-1"
//                                    id="correct1"
//                                 >
//                                    {/* {user.scores.reduce(totalWins)} */}
//                                 </p>
//                              </note>
//                           </article>
//                        );
//                     })}
//                <article className="t-row gold">
//                   <note className="grid">
//                      <p className="tt-row grid-item-position-1">1</p>
//                      <p className="t-row grid-item-name-1" id="username1">
//                         Luke
//                      </p>
//                      <p className="t-row grid-item-num-1" id="cpm1">
//                         339
//                      </p>
//                      <p className="t-row grid-item-score-1" id="correct1">
//                         189
//                      </p>
//                   </note>
//                </article>
//             </section>
//             <section>
//                <LoginComponent />
//             </section>
//          </section>
//       </main>
//    );
// };

export default Home;
