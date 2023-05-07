import React from 'react'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

const routes = [
    {
       path: "/",
       element: <Home/>
    },
    {
      path: "/Register",
      element: <Register/>
    },
    {
      path: "/Login",
      element: <Login/>
    }
    
    
   ]

export default routes