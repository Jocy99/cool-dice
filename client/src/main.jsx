import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import gamePage from './pages/gamePage';
import homePage from './pages/homePage';
import signupPage from './pages/signupPage';
import userPage from './pages/userPage';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
         {
            index: true,
            element: <homePage />,
         },
         {
            path: '/dice-game',
            element: <gamePage />,
         },
         {
            path: '/game-page',
            element: <gamePage />,
         },
         {
            path: '/signup-page',
            element: <signupPage />,
         },
         {
            path: '/user/:username',
            element: <userPage />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
);
