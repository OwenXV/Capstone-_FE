import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<BrowserRouter>
      <Routes>
        <Route path='Home' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
