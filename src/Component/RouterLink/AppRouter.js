import React from 'react';
import PlayoutHospital from '../Hospital/PlayoutHospital';
import PlayoutPatient from '../Patient/PlayoutPatient';
import PlayoutDoctor from '../Doctor/PlayoutDoctor';
import { BrowserRouter as Router} from 'react-router-dom';

const AppRouter = () => {
  const user = JSON.parse(localStorage.getItem('customer'));
  return (
    <Router>
      {!user ? (
        <PlayoutHospital />
      ) : user.role === 0 ? (
        <PlayoutDoctor />
      ) : (
        <PlayoutPatient />
      )}
    </Router>
  );
};

export default AppRouter;
