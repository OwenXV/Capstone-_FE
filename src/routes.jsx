import React from 'react'
import Home from './pages/Home'
import Register from './pages/Register'

const routes = [
    {
       path: "/",
       element: <Home/>
    },
    {
      path: "/Register",
      element: <Register/>
    }
    
   ]

export default routes