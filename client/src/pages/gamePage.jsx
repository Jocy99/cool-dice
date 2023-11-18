// imported necessary components for the game page
import DiceComponent from '../components/DiceComponent';
// import LogoutComponent from '../components/LogoutComponent';
// added style object
const navStyles = {
   textAlign: 'center',
};
// added the game page with a logout component
const GamePage = () => {
   return (
      <main>
         <section className="bdy-container">
            <header>
               <h3 style={{ ...navStyles }}>Cool Dice Game</h3>
            </header>
            <DiceComponent />
            {/* <LogoutComponent /> */}
         </section>
      </main>
   );
};

export default GamePage;
