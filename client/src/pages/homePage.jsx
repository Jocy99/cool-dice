// import { useQuery } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

const navStyles = {
   textAlign: 'center',
};

const homePage = () => {
   return (
      <main>
         <section className="bdy-container">
            <header>
               <h3 style={{ ...navStyles }}>High-Scores</h3>
            </header>
            <section className="grid">
               <p className="t-row grid-item-name-0">Name</p>
               <p className="t-row grid-item-num-0">Rolls</p>
               <p className="t-row grid-item-score-0">Wins</p>
            </section>
            <section className="grphc-container score-scroll block"></section>
            <section>
               <form className="f-row block login-form">
                  <div className="inv-fieldset">
                     <label id="username-label">Name:</label>
                     <span className="in-row">
                        <input id="username-row" placeholder="User Name" />
                     </span>
                  </div>
                  <button className="ii-row btn-row" type="submit">
                     Login
                  </button>
               </form>
            </section>
         </section>
      </main>
   );
};

export default homePage;
