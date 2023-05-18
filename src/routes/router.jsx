import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Pages/HomePage/Main/Main';
import Home from '../Pages/HomePage/Home/Home';
import Login from '../Pages/LoginPage/Login';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        }
      ]
    },
  ]);

export default router;