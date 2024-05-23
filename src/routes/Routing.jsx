import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tours from '../components/Tours';
import LoginF from '../components/LoginF';
import Register from '../components/Register';
import Home from '../components/Home';
import Tour from '../components/Tour';

const Routing = () => {
  return (
  <Routes>
  
    <Route path='/tours' element={<Tours/>}/>
    <Route path='/login' element={<LoginF/>} />
    <Route path='register' element={<Register/>}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/tours/:_id' element={<Tour/>}/>
  </Routes>

  )
}

export default Routing
