import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// import { User } from '../../../server/models';
import LoginComponent from '../components/LoginComponent';

const navStyles = {
   textAlign: 'center',
};

const HomePage = () => {
   const { loading, data } = useQuery(QUERY_USERS);
   const users = data?.users || [];
   console.log(data?.users[0].score);

   let highScoreUsers = [...users].sort((a, b) => {
      const aWins = a.score?.totalWins || 0;
      const bWins = b.score?.totalWins || 0;
      return bWins - aWins;
   });

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
            <section
               className="grphc-container score-scroll block"
               style={{ marginLeft: '12rem' }}
            >
               {loading
                  ? 'loading...'
                  : highScoreUsers.map((user, index) => (
                       <article
                          className="t-row gold"
                          style={{ ...navStyles }}
                          key={index}
                       >
                          <note className="grid">
                             <p className="tt-row grid-item-position-1">
                                {index + 1}
                             </p>
                             <p
                                className="t-row grid-item-name-1"
                                id={`username${index + 1}`}
                             >
                                {user?.username}
                             </p>
                             <p
                                className="t-row grid-item-num-1"
                                id={`cpm${index + 1}`}
                             >
                                {user?.score?.totalRolls || 0}
                             </p>
                             <p
                                className="t-row grid-item-score-1"
                                id={`correct${index + 1}`}
                             >
                                {user?.score?.totalWins || 0}
                             </p>
                          </note>
                       </article>
                    ))}
            </section>
            <section>
               <LoginComponent />
            </section>
         </section>
      </main>
   );
};

export default HomePage;
