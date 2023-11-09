export default function DiceComponent() {
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
   return (
      <section className="bdy-container">
         <section className="i-row block">
            <article className="i-col inline-flex">
               <span className="grphc-container" id="computer">
                  <img
                     id="computer-dice"
                     alt="dice image here"
                     src={getDiceImage(1)}
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
                     src={getDiceImage(1)}
                     width="85"
                     height="121"
                  />
               </span>
            </article>
         </section>
         <section>
            <button className="btn-row">Roll</button>
         </section>
      </section>
   );
}
