import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Course, Home, Projects } from './pages/inc.jsx';
import { Login, Register } from './pages/users/inc.jsx';
import NotFound from './components/NotFound.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path='/course' element={<Course />} />
        <Route  path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App