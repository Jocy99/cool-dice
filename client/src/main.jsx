import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import GamePage from './pages/gamePage';
import HomePage from './pages/homePage';
import Signup from './pages/Signup.jsx';
import UserPage from './pages/userPage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      // errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <HomePage />,
         },
         {
            path: '/dice-game',
            element: <GamePage />,
         },
         {
            path: '/game-page',
            element: <GamePage />,
         },
         {
            path: '/signup',
            element: <Signup />,
         },
         {
            path: '/user/:username',
            element: <UserPage />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
);
