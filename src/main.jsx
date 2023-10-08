import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './components/providers/AuthProvider';
import TicketBooking from './components/TicketBooking/TicketBooking';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import WishList from './components/WishList/WishList';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Description from './components/Description/Description';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/store.json')
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/ticketBooking",
        element: <PrivateRoute><TicketBooking></TicketBooking></PrivateRoute>
      },
      {
        path: "/wishList",
        element: <PrivateRoute><WishList></WishList></PrivateRoute>
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><Description></Description></PrivateRoute>,
        loader: () => fetch('/store.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
