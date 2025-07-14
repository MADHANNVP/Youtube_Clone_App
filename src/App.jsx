import { useState } from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home.jsx'
import Video from './Pages/Video/Video.jsx'

function App() {

  return (
    <BrowserRouter>
       <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'Video/:CategoryId/:VideoId'} element={<Video/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
