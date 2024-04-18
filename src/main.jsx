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
import EstateDetails from './components/EstateDetails'
import ErrorPage from './Pages/ErrorPage'
import UpdateProfile from './Pages/UpdateProfile'

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
      path:'/UpdateProfile',
      element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
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
