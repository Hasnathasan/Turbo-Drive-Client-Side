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
import Details from '../Pages/Details/Details';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import PrivateRoute from '../Pages/PrivateRoute/PrivateRoute';

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
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: '/details/:id',
          element: <Details></Details>,
          loader: ({params}) => fetch(`https://toy-marketplace-server-henna.vercel.app/toys/${params.id}`)
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
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    }
  ]);

export default router;