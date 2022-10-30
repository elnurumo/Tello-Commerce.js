import React from 'react'
import instagram from "../../../images/instagram.svg"
import facebook from "../../../images/facebook.svg"
import youtube from "../../../images/youtube.svg"
import twitter from "../../../images/twitter.svg"
import logo from "../../../images/Logo-Tello.svg"
import SocialMedia from './SocialMedia/SocialMedia'


const Footer = () => {
    return (
        <footer className="footer_area">
            <div className="footer_part1">
                <div className="logo_social_area">
                    <div className="logo">
                        <img src={logo} alt="" className="logo_img" />
                    </div>
                    <div className="social_media">
                        <a href="#"><img src={instagram} alt="" className="media" /></a>
                        <a href="#"><img src={facebook} alt="" className="media" /></a>
                        <a href="#"><img src={youtube} alt="" className="media" /></a>
                        <a href="#"><img src={twitter} alt="" className="media" /></a>
                    </div>
                </div>
                <SocialMedia name1={"Menu"} name2={"Yeni"} name3={"Endirimlər"} name4={"Aksessuarlar"} name5={"Bütün brendlər"} />
                <SocialMedia name1={"Kömək"} name2={"Tez-tez soruşulan suallar"} name3={"Çatdırılma xidməti"} name4={"Geri qaytarılma şərtləri"} />
                <SocialMedia name1={"Əlaqə"} name2={"M. K. Ataturk avenue 89, Baku, Azerbaijan"} name3={"example@gmail.com"} name4={"*2108"} />
                <div className="copyright mob">
                    <h6>Qaydalar və şərtlər</h6>
                    <h6>Məxfilik siyasəti</h6>
                </div>
            </div>
            <div className='copyright_area'>
                <div className="copyright">
                    <h6>©  Tello 2022. Bütün hüquqlar qorunur.</h6>
                </div>
                <div className="copyright desk">
                    <h6>Qaydalar və şərtlər</h6>
                    <h6>Məxfilik siyasəti</h6>
                </div>
            </div>
        </footer>
    )
}

export default Footer