// import { useQuery } from '@apollo/client';
// import { Link } from 'react-router-dom';

import DiceComponent from '../components/DiceComponent';

const navStyles = {
   textAlign: 'center',
};

const GamePage = () => {
   return (
      <main>
         <section className="bdy-container">
            <header>
               <h3 style={{ ...navStyles }}>Cool Dice Game</h3>
            </header>
            <DiceComponent />
         </section>
      </main>
   );
};

export default GamePage;
