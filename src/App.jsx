import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import routes from "./routes"


function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>
      {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} exact />
        })}
      </Routes>
  )
}

export default App
