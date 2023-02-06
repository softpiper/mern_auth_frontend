import React from 'react'
import {  Navigate, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import Activate from './pages/auth/Activate'

const AppRoutes = ({user}) => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={user ?<Navigate to="/"/>: <Signup/>}/>
            <Route path='/signin' element={user? <Navigate to="/"/> :<Signin/>}/>
            <Route path='/auth/activate/:token' element={<Activate/>}/>

        </Routes>
    </div>
  )
}

export default AppRoutes