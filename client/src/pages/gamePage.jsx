// import { useQuery } from '@apollo/client';
// import { Link } from 'react-router-dom';

import DiceComponent from '../components/DiceComponent';
import LogoutComponent from '../components/LogoutComponent';

const navStyles = {
   textAlign: 'center',
};

const gamePage = () => {
   return (
      <main>
         <section className="bdy-container">
            <header>
               <h3 style={{ ...navStyles }}>Cool Dice Game</h3>
            </header>
            <DiceComponent />
            <LogoutComponent />
         </section>
      </main>
   );
};

export default gamePage;
