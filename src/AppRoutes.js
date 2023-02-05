import React from 'react'
import {  Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Activate from './pages/auth/Activate'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/auth/activate/:token' element={<Activate/>}/>

        </Routes>
    </div>
  )
}

export default AppRoutes