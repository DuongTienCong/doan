// PlayoutHospital.js
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';

const PlayoutHospital = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default PlayoutHospital;
