import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './Shop';
import Landing from './Landing';
import Cart from './Cart';
import { ShoppingCartProvider } from './components/ShoppingCartProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  </React.StrictMode>
);
