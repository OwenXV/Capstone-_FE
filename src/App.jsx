import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import routes from "./routes"
import Nav from './components/Navibar'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routes>
      {routes.map((route, index) => {
          return <Route key={index} path={route.path} element={route.element} exact />
        })}
      </Routes>
      <Footer/>
    </>
  );

}

export default App
