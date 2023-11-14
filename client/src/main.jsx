// imports the React framework
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// imports the App and pages
import App from './App.jsx';
// import GamePage from './pages/gamePage';
import HomePage from './pages/homePage.jsx';
import SignupPage from './pages/signupPage';
// adds the router for web app paths
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
