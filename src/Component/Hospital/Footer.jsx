import React from 'react'
import acb from '../../Assests/img/acb.png'
import jcb from '../../Assests/img/jcb.png'
import master from '../../Assests/img/master.png'
import mb from '../../Assests/img/mb.png'
import visa from '../../Assests/img/visa.png'
import '../Hospital/Footer.css'



const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-section'>
                    <h3>LIỆN Hệ</h3>
                    <p>Tổng đài đặt hẹn : 0389219213</p>
                    <p>Tư vấn y khoa : 0389219213</p>
                    <p>Chăm sóc khách hàng : 0389219213</p>
                    <p>Hộp thư : duongcong11022000@gmail.com</p>
                    <p>ĐỒNG HÀNH GIÁO DỤC</p>
                    <p>ĐỒNG HÀNH CÙNG DOANH NGHIỆP</p>
                    <div className='footer-payment-methods'>
                        <img src={acb}></img>
                        <img src={jcb}></img>
                        <img src={master}></img>
                        <img src={mb}></img>
                        <img src={visa}></img>
                    </div>
                </div>
                <div className='footer-section'>
                    <h3>HỆ THỐNG ĐA KHOA DREAMMAKER</h3>
                    <p><strong>ĐA KHOA DREAMMAKER</strong></p>
                    <p>Hotline: 0389219213</p>
                    <p>Giờ khám :  7h30-11h30 ; 13h00-17h00(Thứ 2 -7) </p>
                    <div className='footer-pocily'>
                        <p>Đảm bảo chính sách bảo mật</p>
                        <p>Đảm bảo chính sách thanh toán</p>
                    </div>
                </div>
                <div className='footer-section'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4544374621487!2d106.62420897355305!3d10.852999257779658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2sQuang%20Trung%20Software%20City!5e0!3m2!1sen!2s!4v1721131391859!5m2!1sen!2s"></iframe>
                </div>
            </div>
        </>
    )

}

export default Footer