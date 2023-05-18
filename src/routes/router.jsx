import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Pages/Main/Main';
import Home from '../Pages/HomePage/Home/Home';
import Login from '../Pages/LoginPage/Login';
import SignUp from '../Pages/SignupPage/SignUp';
import AuthProvider from '../Provider/AuthProvider';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProvider><Main></Main></AuthProvider>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;