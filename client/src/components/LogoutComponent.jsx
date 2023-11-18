// imports the useState and useEffect hooks from react
import { useEffect } from 'react';
// imports the auth function from utils/auth
import Auth from '../utils/auth';
// imports the Link component from react-router-dom
import { Link } from 'react-router-dom';

export default function LogoutComponent() {
   // useEffect to run the logout logic when the component mounts
   useEffect(() => {
      // Logout logic
      Auth.logout();
      window.location.replace('/');
   }, []);

   return (
      <div className="col-11 col-lg-10">
         <div className="card">
            <h4 className="t-row">Logout</h4>
            <div className="card-body">
               <p>
                  You have been successfully logged out.{' '}
                  {/* head back to the homepage */}
               </p>
               <Link to="/">Back to Homepage</Link>
            </div>
         </div>
      </div>
   );
}
