import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const playingStyles = {
   textAlign: 'center',
};

const gamePage = () => {
   return (
      <main>
         <section className="bdy-container">
            <section className="i-row block">
               <article className="i-col inline-flex">
                  <span className="grphc-container" id="com">
                     <img
                        id="dice"
                        alt="dice image here"
                        src=""
                        width="85"
                        height="121"
                     />
                  </span>
               </article>
               <article className="i-col inline-flex">
                  <span className="grphc-container" id="player">
                     <img
                        id="dice"
                        alt="dice image here"
                        src=""
                        width="85"
                        height="121"
                     />
                  </span>
               </article>
            </section>
         </section>
      </main>
   );
};

export default gamePage;
