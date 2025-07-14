import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'

function App() {
  const [sidebar, setsidebar] = useState(false)
  const [search, setsearch] = useState("")

  return (
    <BrowserRouter>
      <Navbar setsidebar={setsidebar} search={search} setsearch={setsearch} />
      <Routes>
        <Route path={'/'} element={<Home sidebar={sidebar} search={search} />} />
        <Route path={'Video/:CategoryId/:VideoId'} element={<Video />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
