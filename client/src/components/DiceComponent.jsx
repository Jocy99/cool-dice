// imports useEffect, useRef, and useState from react
import { useEffect, useRef, useState } from 'react';
// adds a component for the dice
export default function DiceComponent() {
   // adds the player specific state
   const [playerRoll, setPlayerRoll] = useState(~~(Math.random() * 5 + 1));
   // adds the computer specific state
   const [computerRoll, setComputerRoll] = useState(~~(Math.random() * 5 + 1));
   // adds an iteration state counter for effect
   const [diceIterations, setDiceIterations] = useState(0);
   // adds the use ref for counting the interval
   const intervalRef = useRef();
   // adds an effect to clear the interval
   useEffect(() => {
      if (diceIterations > 15) {
         clearInterval(intervalRef.current);
      }
      // this is for debugging purposes
      console.log(`if (${diceIterations} > 15) {...}`);
      console.log(`clearInterval(${intervalRef.current});`);
   }, [diceIterations]);
   // adds a function for rolling dice
   function rollDie() {
      // adds the dice rolling animation effect
      intervalRef.current = setInterval(() => {
         // uses the setter functions to update the states
         setPlayerRoll(Math.floor(Math.random() * 5 + 1));
         setComputerRoll(Math.floor(Math.random() * 5 + 1));
         // adds a reducer function to pass previous state
         setDiceIterations((diceIterations) => diceIterations + 1);
      }, 20);
   }
   // adds a function to get the dice images
   function getDiceImage(number) {
      switch (number) {
         case 1: {
            return 'https://res.cloudinary.com/bitkit/d/p5s.svg';
         }
         case 2: {
            return 'https://res.cloudinary.com/bitkit/d/q58.svg';
         }
         case 3: {
            return 'https://res.cloudinary.com/bitkit/d/wz0.svg';
         }
         case 4: {
            return 'https://res.cloudinary.com/bitkit/d/zj2.svg';
         }
         case 5: {
            return 'https://res.cloudinary.com/bitkit/d/al6.svg';
         }
         case 6: {
            return 'https://res.cloudinary.com/bitkit/d/b21.svg';
         }
      }
   }
   // returns the jsx to the front end
   return (
      <section className="bdy-container">
         <section className="i-row block">
            <article className="i-col inline-flex">
               <span className="grphc-container" id="computer">
                  <img
                     id="computer-dice"
                     alt="dice image here"
                     src={getDiceImage(computerRoll)}
                     width="85"
                     height="121"
                  />
               </span>
            </article>
            <article className="i-col inline-flex">
               <span className="grphc-container" id="player">
                  <img
                     id="player-dice"
                     alt="dice image here"
                     src={getDiceImage(playerRoll)}
                     width="85"
                     height="121"
                  />
               </span>
            </article>
         </section>
         <section>
            <button
               className="btn-row"
               onClick={rollDie}
               style={{
                  display: 'block',
                  marginTop: '4rem',
                  transform: 'scale(2.5)',
                  backgroundColor: 'hsla(215, 32%, 58%, 0.65)',
               }}
            >
               Roll
            </button>
         </section>
      </section>
   );
}
