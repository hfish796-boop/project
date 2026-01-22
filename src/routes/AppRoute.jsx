import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import MainLayout from '../layout/MainLayout';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Service from '../pages/Service';
import Info from '../pages/Info';

const AppRoute = () => {
  return (
    <>
    <Routes>
        <Route element={<MainLayout/>}>

        <Route index element={<Home/>}/>

        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}></Route>
        
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/info' element={<Info/>}></Route>

        </Route>
    </Routes>
    
    </>
  )
}

export default AppRoute