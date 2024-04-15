import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register';
import AuthProvider from './providers/AuthProvider'
import PrivateRoute from './routes/PrivateRoute'
import Orders from './Pages/Orders'
import Profile from './Pages/Profile'
import EstateDetails from './components/EstateDetails'
import ErrorPage from './Pages/ErrorPage'

const router = createBrowserRouter([{
  path:'/',
  element: <Root></Root>,
  children:[
    {
      path:'/',
      element: <Home></Home>,
    },
    {
      path:'/login',
      element: <Login></Login>,
    },
    {
      path:'/register',
      element: <Register></Register>,
    },
    {
      path:'/orders',
      element:<PrivateRoute><Orders></Orders></PrivateRoute>,
    },
    {
      path:'/profile',
      element:<PrivateRoute><Profile></Profile></PrivateRoute>,
    },
    {
      path:'/EstateDetails/:id',
      element:<EstateDetails></EstateDetails>,
      loader:() => fetch('data.json')
    }
  ],
  errorElement:<ErrorPage/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>
)
