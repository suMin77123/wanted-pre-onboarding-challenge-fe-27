import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import TodoPage from './routes/Todo';
import LoginPage from './routes/Login';
import SignUpPage from './routes/SignUp';
import ROUTES_URL from './constants/ROUTES_URL';

const router = createBrowserRouter([
  {
    path: ROUTES_URL.MAIN,
    element: <TodoPage />,
  },
  {
    path: ROUTES_URL.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTES_URL.SIGNUP,
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
