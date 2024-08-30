// PlayoutPatient.js
import React from 'react';
import HeaderPatient from './HeaderPatient';
import MainPatient from './MainPatient';
import { Route, Routes } from 'react-router-dom';
import HistoryPatient from './HistoryPatient';

const PlayoutPatient = () => {
  return (
    <div className='patient'>
      <HeaderPatient />
      <Routes>
        <Route path='/home_patient' element={<MainPatient />} />
        <Route path='/history_patient/:id' element={<HistoryPatient />} />
      </Routes>
    </div>
  );
};

export default PlayoutPatient;
