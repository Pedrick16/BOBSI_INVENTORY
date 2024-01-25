import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomeLayout from '../shared/components/layouts/homeLayout/HomeLayout';
import { Dashboard, Login, Register } from '../pages';


const AllRoutes = () => {
  return (
    <Routes>
        <Route element={<HomeLayout/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
        <Route path='/' element={<Login/>} />
        <Route path='register' element={<Register/>} />
    </Routes>
  )
}

export default AllRoutes

