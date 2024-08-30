import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import logo from '../../Assests/img/logo.png'
import '../Hospital/Header.css'
import { Link } from 'react-router-dom';



const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>

      <div className="header-nav">
        <div className="header-logo">
          <img src={logo} alt="Logo" data-aos="fade-right" data-aos-duration="1000" />
        </div>
        <div className="header-links" data-aos="fade-left" data-aos-duration="1000">
        <Link to="/" className='header-mainlink'>Home</Link>
          <a href="#">About</a>
          <a href="#">Doctor</a>
          <a href="#">Services</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
          <Link to="/login" className='header-button'>Login</Link>
        </div>
      </div>
    </>
  );
};

export default Header;