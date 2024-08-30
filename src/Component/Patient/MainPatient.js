import React, { useState, useEffect } from "react";
import '../Patient/MainPatient.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faHeart, faChartLine, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import anh1 from '../../Assests/img/anh1.png'
import { Link } from "react-router-dom";
import axios from "axios";

const MainPatient = () => {
  const patient = JSON.parse(localStorage.getItem('customer'));
  const [item, setItem] = useState([]);
  const [message, setMessage] = useState('');



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
    <>
      <div className='mainpt'>
        <div className='mainpt-dasboard'>
          <div className='mainpt-search'>
            <div className='mainpt-input'>
              <input type='text' placeholder='Tìm bác sĩ... ' id='fname' name="fname" />
              <FontAwesomeIcon icon={faMagnifyingGlass} className='mainpt-search-icon' />
            </div>
          </div>
          <div className='mainpt-card'>
            <div className='mainpt-card-blood'>
              <div className='mainpt-icon'><FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon></div>
              <div className='mainpt-info'>
                <h3>Nhóm máu</h3>
                <p>B+</p>
              </div>
            </div>
            <div className='mainpt-card-heart'>
              <div className='mainpt-icon'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
              <div className='mainpt-info'>
                <h3>Nhịp tim</h3>
                <p>122</p>
              </div>
            </div>
            <div className='mainpt-card-total'>
              <div className='mainpt-icon'><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon></div>
              <div className='mainpt-info'>
                <h3>Huyết áp</h3>
                <p>123</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mainpt-chart-section'>
          <h3>Sơ đồ khám lại của bệnh nhân</h3>
          <img src={anh1} alt="Chart"></img>
        </div>
        <div className='mainpt-history-section'>
          <h3>Lịch sử khám bệnh</h3>
          <table>
            <thead>
              <tr>
                <th>Ngày</th>
                <th>Bệnh viện</th>
                <th>Địa chỉ</th>
                <th>Chi nhánh</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {item.map((item) => (
                <tr key={item.id}>
                  <td>{new Date(item.ngay).toLocaleDateString('vi-VN')}</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <Link to={`/history_patient/${item.id}`} className='details-link'>Chi tiết</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MainPatient;