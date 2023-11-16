// imports the useState from react
import { useState } from 'react';
// imports the auth function from utils/auth
import Auth from '../utils/auth';
// imports the Link from react-router-dom
import { Link } from 'react-router-dom';
// imports the useMutation from apollo, used to add a user
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

export default function LoginComponent() {
   const [formState, setFormState] = useState({ email: '', password: '' });
   const [Login, { data }] = useMutation(LOGIN_USER);

   const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
         ...formState,
         [name]: value,
      });
   };

   // submit form
   const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
         const { data } = await Login({
            variables: { ...formState },
         });
         console.log("LOGIN DATA", data);
         localStorage.setItem('user', data.email);
         Auth.login(data.login.token);
      } catch (e) {
         console.error(e);
      }

      // clear form values
      setFormState({
         email: '',
         password: '',
      });
   };

   return (
      <div className="col-11 col-lg-10">
         <div className="card">
            <h4 className="t-row">Login</h4>
            <div className="card-body">
               {data ? (
                  <p>
                     Success! You may now head{' '}
                     <Link to="/">back to the homepage.</Link>
                  </p>
               ) : (
                  <form onSubmit={handleFormSubmit}>
                     <div
                        className="f-row flex"
                        style={{
                           flexDirection: 'column',
                           borderImageSlice: '60',
                        }}
                     >
                        <span className="in-row">
                           <input
                              style={{ marginBottom: '10px' }}
                              placeholder="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                           />
                        </span>
                        <span className="in-row">
                           <input
                              style={{ marginBottom: '10px' }}
                              placeholder="******"
                              name="password"
                              type="password"
                              value={formState.password}
                              onChange={handleChange}
                           />
                        </span>
                        <span
                           style={{
                              display: 'inline-flex',
                              justifyContent: 'space-around',
                              width: '35%',
                           }}
                        >
                           <Link to="/sign-up">
                              <button className="ii-row btn-row">
                                 Sign-up
                              </button>
                           </Link>
                           <button className="ii-row btn-row" type="submit">
                              Play
                           </button>
                        </span>
                     </div>
                  </form>
               )}
            </div>
         </div>
      </div>
   );
}
