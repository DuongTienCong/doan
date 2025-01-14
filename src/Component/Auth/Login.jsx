import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import login from '../../Assests/img/login.png';
import '../Auth/Login.css'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [message, setMessage] = useState(''); 

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(''); // Xóa thông báo lỗi trước khi gửi yêu cầu

    try {
      const response = await axios.post(`http://localhost:3000/login`, { cccd: username, pass: password });
      console.log(response.data);
      if (response.data) {
        const role = response.data.role; 
        const patient = response.data;
        localStorage.setItem("customer", JSON.stringify(patient)); // lưu thông tin đăng nhập trên localStorge
        if (role === 0) {
          navigate('/admin'); // Điều hướng đến trang bác sĩ
        } else {
          navigate('/home_patient'); // Điều hướng đến trang bệnh nhân
        }
      } else {
        setMessage('Đăng nhập thất bại');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) { // phản hồi lỗi 401 trong node js sai cccd hoặc mật khẩu
        alert('CCCD hoặc mật khẩu không đúng');
      } else {
        console.error('Lỗi khi đăng nhập:', error);
        setMessage('Đã xảy ra lỗi khi đăng nhập');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-section">
        <img src={login} alt="Welcome" />
        <h2>Chào mừng đến sổ khám bệnh</h2>
      </div>
      <div className="login-right-section">
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            id="cccd"
            name="cccd"
            required
            placeholder='Vui lòng nhập số CCCD'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder='Vui lòng nhập mật khẩu'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Đăng Nhập</button>
          <p><a href="#">Bạn Quên Mật Khẩu?</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;