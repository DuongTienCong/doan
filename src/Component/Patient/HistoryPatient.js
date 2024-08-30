import React, { useEffect, useState } from 'react';
import '../Patient/HistoryPatient.css';
import logo from '../../Assests/img/logo.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const HistoryPatient = () => {
  const {id} = useParams()
  const [item, setItem] = useState([]);
  const [message, setMessage] = useState('');
  const patient = JSON.parse(localStorage.getItem('customer'));
  

  useEffect(() => {
    if (patient[0].id) {
      axios.get(`http://localhost:3000/all-medical-records/${patient[0].id}`)
        .then(response => {
          if (response.data.length === 0) {
            console.log(response.data);
            setMessage('Bệnh nhân chưa có lịch sử khám bệnh');
          } else {
            setItem(response.data);
          }
        })
        .catch(error => {
          console.error('Lỗi khi lấy dữ liệu bệnh nhân', error);
          setMessage('Lỗi khi lấy dữ liệu bệnh nhân', error);
        });
    }
  }, [patient[0].id]);
  
  return (
    <div className="historypt-container">
      <div className="historypt-profile">
        <img src={logo} alt="Logo" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Ngày</th>
            <th>Bác sĩ</th>
            <th>Chuẩn đoán</th>
            <th>Kết quả</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <tr key={item.id}>
              <td>{new Date(item.ngay).toLocaleDateString('vi-VN')}</td>
              <td></td>
              <td>{item.chuandoan}</td>
              <td></td>
              <td>
                <Link to='/home' className='details-link'>Chi tiết</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryPatient;


