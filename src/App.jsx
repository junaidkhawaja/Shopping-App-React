import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Productdetails from './components/Productdetails'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import AuthDetails from './components/AuthDetails'
const App = () => {
  return (
    <div>
      <AuthDetails />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/productdetails/:id" element={<Productdetails />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App