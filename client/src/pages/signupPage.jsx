// import { useQuery } from '@apollo/client';
// import { Link } from 'react-router-dom';

import RegisterComponent from '../components/RegisterComponent';

const navStyles = {
   textAlign: 'center',
};

const SignupPage = () => {
   return (
      <main>
         <section className="bdy-container">
            <header>
               <h3 style={{ ...navStyles }}>Cool Dice Game</h3>
            </header>
            <RegisterComponent />
         </section>
      </main>
   );
};

export default SignupPage;
