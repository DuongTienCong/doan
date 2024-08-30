import React from "react"
import '../Patient/HeaderPatient.css'
import logo from '../../Assests/img/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faComment, faWallet, faPlus, faClock, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";

const HeaderPatient = () => {
    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem("customer"); // xóa thông tin lưu trên localStoge
        navigate('/')
    }


    return (
        <>
            <div className='headerpt-fluid'>
                <div className='headerpt'>
                    <div className='headerpt-logo'>
                        <img src={logo} alt='logo'></img>
                    </div>
                    <ul className='headerpt-links'>
                        <li><FontAwesomeIcon icon={faHouse} /><a href='#'> &nbsp; Trang chủ</a></li>
                        <li><FontAwesomeIcon icon={faUser} /><a href='#'> &nbsp; Thông tin cá nhân</a></li>
                        <li><FontAwesomeIcon icon={faComment} /><a href='#'> &nbsp; Hỗ trợ</a></li>
                        <li><FontAwesomeIcon icon={faWallet} /><a href='#'> &nbsp; Ví</a></li>
                        <li><FontAwesomeIcon icon={faPlus} /><Link to='/inforpatient'> &nbsp; Dịch vụ y tế</Link></li>

                    </ul>
                    <div className='headerpt-spacer'>
                        <li className='headerpt-maintenance'><FontAwesomeIcon icon={faClock} /><a href='#'> &nbsp; Liên hệ bảo trì</a></li>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} /><button onClick={handleLogout} className="logout-button">Đăng xuất</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeaderPatient;