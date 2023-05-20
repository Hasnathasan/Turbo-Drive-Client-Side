import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Pages/Main/Main';
import Home from '../Pages/HomePage/Home/Home';
import Login from '../Pages/LoginPage/Login';
import SignUp from '../Pages/SignupPage/SignUp';
import AuthProvider from '../Provider/AuthProvider';
import AllToy from '../Pages/AllToys/AllToy';
import AddToy from '../Pages/AddToy/AddToy';
import Blog from '../Pages/Blog/Blog';
import MyToys from '../Pages/MyToys/MyToys';
import EditToy from '../Pages/MyToys/EditToy';

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
        },
        {
          path: '/mytoys',
          element: <MyToys></MyToys>
        },
        {
          path: '/edit/:id',
          element: <EditToy></EditToy>,
          loader: ({params}) => fetch(`https://toy-marketplace-server-henna.vercel.app/toys/${params.id}`)
        },
        {
          path: '/alltoys',
          element: <AllToy></AllToy>,
          loader: () => fetch('https://toy-marketplace-server-henna.vercel.app/toys')
        },
        {
          path: '/addtoy',
          element: <AddToy></AddToy>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
  ]);

export default router;