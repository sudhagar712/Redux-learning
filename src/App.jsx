import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import Dashboard from './Components/Dashboard';
import Cart from './Components/Cart';


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "cart", element: <Cart /> }
      
      ],
    },

    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
