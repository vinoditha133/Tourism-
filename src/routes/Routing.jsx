import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tours from '../components/Tours';
import LoginF from '../components/LoginF';
import Register from '../components/Register';
import Home from '../components/Home';

const Routing = () => {
  return (
  <Routes>
  
    <Route path='/tours' element={<Tours/>}/>
    <Route path='/login' element={<LoginF/>} />
    <Route path='register' element={<Register/>}/>
    <Route path='/home' element={<Home />}/>
  </Routes>

  )
}

export default Routing
