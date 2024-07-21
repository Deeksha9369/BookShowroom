
import React from "react";
import Home from "./home/Home";
import {Navigate,Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses"; 
import Signup from './components/Signup';
import Login from './components/Login';
import Contactus from "./contactus/Contactus";
import { useAuth } from './context/AuthProvider'; 
import { Toaster } from 'react-hot-toast';
import Aboutus from "./aboutus/Aboutus";


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>

    <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      <Toaster />
    </div>
    </>
  );
}

export default App;
