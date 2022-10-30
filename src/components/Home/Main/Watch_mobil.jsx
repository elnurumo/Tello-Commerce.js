import React from 'react'
import xiaomi from "../../../images/xiaomi-rek.png"
import watch from "../../../images/watch.png"
import iphone_rek from "../../../images/iphone-rek.png"
import arrow from "../../../images/arrow.svg"
import { Link } from 'react-router-dom'

const Watch_mobil = () => {
    return (
        <div className='watch_mobil_area'>
            <div className="mobil">
                <div className="about_area">
                    <h1 className="mob_name">Telefon</h1>
                    <div className="link_area">
                        <Link to={"/products/mobil-telefonlar"} className="mobil_link">Məhsullara keçid</Link>
                        <img src={arrow} alt="arrow" />
                    </div>
                </div>
                <img className='xiaomi' src={xiaomi} alt="Xiaomi" />
            </div>
            <div className="watch_aks_area">
                <div className="watch">
                    <div className="about_area">
                        <h1 className="mob_name">Smart Saat</h1>
                        <div className="link_area">
                            <Link to={"/products/saatlar"} className="mobil_link">Məhsullara keçid</Link>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                    <img className='watch_img' src={watch} alt="Watch" />
                </div>
                <div className="aks">
                    <div className="about_area">
                        <h1 className="mob_name">Aksesuar</h1>
                        <div className="link_area">
                            <Link to={"/products/aksessuarlar"} className="mobil_link">Məhsullara keçid</Link>
                            <img src={arrow} alt="arrow" />
                        </div>
                    </div>
                    <img className='iphone_img' src={iphone_rek} alt="iphone" />
                </div>
            </div>
        </div>
    )
}

export default Watch_mobil