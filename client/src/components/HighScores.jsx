import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
// import React, { useState } from 'react';


export default function HighScores() {
   const { loading, data } = useQuery(QUERY_USERS);

   const userList = data?.users || [];
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
   function showScores(data) {
      // grabs the container element for dynamic creation
      const scrollContainer = document.querySelector('.score-scroll');
      // adds a variable to count iterations
      let forEachCounter = 0;
      // loops through the data to create dynamic html
      data.forEach((item, index) => {
         // adds a counter to ensure no more than 10 scores
         if (forEachCounter < 10) {
            // todo: ensure the code in this loop is correct
            // creates the necessary article element
            let arElement = document.createElement('article');
            if (index + 1 === 1) {
               arElement.classList.add('t-row', 'gold');
            } else if (index + 1 === 2) {
               arElement.classList.add('t-row', 'silver');
            } else if (index + 1 === 3) {
               arElement.classList.add('t-row', 'bronze');
            } else if (
               index + 1 !== 1 &&
               index + 1 !== 2 &&
               index + 1 !== 3 &&
               (index + 1) % 2 === 0
            ) {
               arElement.classList.add('t-row', 'green1');
            } else if (
               index + 1 !== 1 &&
               index + 1 !== 2 &&
               index + 1 !== 3 &&
               (index + 1) % 2 !== 0
            ) {
               arElement.classList.add('t-row', 'green2');
            }
            // creates the note element
            let ntElement = document.createElement('note');
            ntElement.classList.add('grid');
            // adds the paragraph tags with a for loop
            for (let i = 0; i < 4; i++) {
               let pElement = document.createElement('p');
               if (i === 0) {
                  pElement.classList.add(
                     'tt-row',
                     `grid-item-position-${index + 1}`
                  );
                  pElement.textContent = index + 1;
               } else if (i === 1) {
                  pElement.classList.add(
                     't-row',
                     `grid-item-name-${index + 1}`
                  );
                  pElement.id = `username${index + 1}`;
                  try {
                     let name = JSON.stringify(item.user_name);
                     // shortens the name if too long
                     let sanitizedName = name.slice(1, -1);
                     if (sanitizedName.length > 6) {
                        sanitizedName = sanitizedName.slice(0, 3) + '...';
                     }
                     pElement.textContent = sanitizedName;
                  } catch (error) {
                     console.log(`catch (${error.stack})`);
                  }
               } else if (i === 2) {
                  pElement.classList.add('t-row', `grid-item-num-${index + 1}`);
                  pElement.id = `cpm${index + 1}`;
                  try {
                     pElement.textContent = item.wpm;
                  } catch (error) {
                     console.log(`catch (${error.stack})`);
                  }
               } else if (i === 3) {
                  pElement.classList.add(
                     't-row',
                     `grid-item-score-${index + 1}`
                  );
                  pElement.id = `correct${index + 1}`;
                  try {
                     pElement.textContent = item.correct;
                  } catch (error) {
                     console.log(`catch (${error.stack})`);
                  }
               }
               // appends the p element to the note
               ntElement.appendChild(pElement);
            }
            // appends the note to the article
            arElement.appendChild(ntElement);
            // appends the article to parent element
            scrollContainer.appendChild(arElement);
            forEachCounter++;
         }
      });
   }

   return (
      <>
         <h3> Highscores: </h3>
         <ul>
            {highScores.map(({ username, score }) => (
               <li key={username.id}>
                  {username}: {score}
               </li>
            ))}
         </ul>
      </>
   );
}
