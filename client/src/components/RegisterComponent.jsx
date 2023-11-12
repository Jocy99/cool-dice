// imports the useState from react
import { useState } from 'react';
// imports the auth function from utils/auth
import Auth from '../utils/auth';
// imports the Link from react-router-dom
import { Link } from 'react-router-dom';
// imports the useMutation from apollo, used to add a user
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
// adds a component for the dice
export default function RegisterComponent() {
   const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
   });
   const [addUser, { error }] = useMutation(ADD_USER);
   const handleChange = (event) => {
      const { name, value } = event.target;

      setFormState({
         ...formState,
         [name]: value,
      });
   };
   const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);

      try {
         const { data } = await addUser({
            variables: { ...formState },
         });

         Auth.login(data.addUser.token);
      } catch (e) {
         console.error(e);
      }
   };
   return (
      <div className="col-12 col-lg-10">
         <div className="card">
            <ul>
               <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
            </ul>
            <div className="card-body">
               {RegisterComponent.data ? (
                  <p>
                     Success! You may now head{' '}
                     <Link to="/">back to the homepage.</Link>
                  </p>
               ) : (
                  <form onSubmit={handleFormSubmit}>
                     <ul
                        className="f-row flex"
                        style={{ flexDirection: 'column' }}
                     >
                        <input
                           className="form-input"
                           style={{ marginBottom: '10px' }}
                           placeholder="Your username"
                           name="username"
                           type="text"
                           value={formState.name}
                           onChange={handleChange}
                        />
                        <input
                           className="form-input"
                           style={{ marginBottom: '10px' }}
                           placeholder="Your email"
                           name="email"
                           type="email"
                           value={formState.email}
                           onChange={handleChange}
                        />
                        <input
                           className="form-input"
                           style={{ marginBottom: '10px' }}
                           placeholder="******"
                           name="password"
                           type="password"
                           value={formState.password}
                           onChange={handleChange}
                        />
                        <button
                           className="btn btn-block btn-primary"
                           style={{ cursor: 'pointer' }}
                           type="submit"
                        >
                           Submit
                        </button>
                     </ul>
                  </form>
               )}

               {error && (
                  <div className="my-3 p-3 bg-danger text-white">
                     {error.message}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
