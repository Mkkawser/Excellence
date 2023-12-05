import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './Footer'
import { Home } from './Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/r' element={<h1>heelor</h1>} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter >
    </>
  )
}

export default App
