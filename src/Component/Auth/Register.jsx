import React, { useState } from "react";
import '../Auth/Register.css'
import login from '../../Assests/img/login.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [cccd, setCccd] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [phone, setPhone] = useState('');
    const [insurance, setInsurance] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            alert('Mật khẩu xác nhận không khớp');
            return;
        }
        try {
            const response = await axios.post('http://localhost:3000/register', {
                ten: username,
                cccd: cccd,
                sdt: phone,
                ngaysinh: dob,
                pass: password,
                sobh: insurance,
                gt: gender,


            });
            console.log(response.data);
            if (response.data) {
                alert('Đăng ký thành công');
                navigate('/');
                console.log(response.data);
            } else {
                alert('Đăng kí thất bại');
                console.log(response.data);

            }
        } catch (error) {
            console.error('Lỗi khi đăng kí:', error);
            alert('Đã xảy ra lỗi khi đăng kí');
        }
    }

    return (
        <>
            <div className='register-container'>
                <div className='register-left-section'>
                    <img src={login}></img>
                    <h2>Chào mừng đến với sổ khám bệnh</h2>
                </div>
                <div className='register-right-section'>
                    <h2>Đăng ký</h2>
                    <form onSubmit={handleRegister}>
                        <input
                            type='text'
                            id='cccd'
                            name='cccd'
                            value={cccd}
                            onChange={(e) => setCccd(e.target.value)}
                            placeholder='nhập số CCCD' required>
                        </input>

                        <input
                            type='text'
                            id='username'
                            name='username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder='nhập tên người dùng' required>
                        </input>

                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='nhập mật khẩu' required>
                        </input>

                        <input
                            type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            value={confirmpassword}
                            onChange={(e) => setConfirmpassword(e.target.value)}
                            placeholder='nhập đúng mật khẩu' required>
                        </input>

                        <input
                            type='number'
                            id='phone'
                            name='phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder='nhập số điện thoại' required>
                        </input>
                        <input
                            type='number'
                            id='insurance'
                            name='insurance'
                            value={insurance}
                            onChange={(e) => setInsurance(e.target.value)}
                            placeholder='Nhập số bảo hiểm' required>
                        </input>

                        <div className="register-row">
                            <div className="register-item-date">
                                <label htmlFor="dob">Ngày sinh </label>

                                <input
                                    type="date"
                                    id="dob"
                                    name="dob"
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    placeholder=" nhập ngày sinh" required>
                                </input>

                            </div>

                            <div className="register-item-gender">
                                <div className="register-gender-section">
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        checked={gender === '1'}
                                        value='1'
                                        onChange={(e) => setGender(e.target.value)}>
                                    </input>

                                    <label htmlFor="male">Nam</label>

                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        checked={gender === '0'}
                                        value='0'
                                        onChange={(e) => setGender(e.target.value)}>
                                    </input>

                                    <label htmlFor="female">Nữ</label>
                                </div>
                            </div>
                        </div>
                        <button type='submit'>Đăng ký</button>
                        <p><a href='#'>Đăng nhập</a>OR<a href='#'>Quên mật khẩu</a></p>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;