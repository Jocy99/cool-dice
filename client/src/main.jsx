// imports the React framework
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// imports the App and pages
import App from './App.jsx';
import GamePage from './pages/gamePage';
<<<<<<< HEAD
//import HomePage from './pages/homePage.jsx';
// import signupPage from './pages/signupPage';
// import userPage from './pages/userPage';

=======
import HomePage from './pages/homePage.jsx';
import SignupPage from './pages/signupPage';
// adds the router for web app paths
>>>>>>> 8ef72717ddecb3a73ddcccbb7a3f894eb609e601
const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: '/play',
            element: <GamePage />,
         },
         {
            path: '/sign-up',
            element: <SignupPage />,
         },
      ],
   },
]);
// adds and renders the router and web app to the root
ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
);
