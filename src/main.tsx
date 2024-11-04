import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import TodoPage from './routes/Todo';
import LoginPage from './routes/Login';
import SignUpPage from './routes/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TodoPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signUp',
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
