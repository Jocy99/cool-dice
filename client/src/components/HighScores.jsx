import React, { useState } from 'react';

export default function Highscores() {
   // issue graphQl query to get highscores here
   // render highscores

   // fake data:
   const highScores = [
      {
         username: 'Cool Joe',
         score: '15',
      },
      {
         username: 'Amazing Americas',
         score: '13',
      },
      {
         username: 'Frank The Tank',
         score: '12',
      },
   ];
   return (
      <>
         <h3> Highscores: </h3>
         <ul>
            {highScores.map(({ username, score }) => (
               <li>
                  {username}: {score}
               </li>
            ))}
         </ul>
      </>
   );
}
