import React from 'react'
import Reklam1 from "../../../images/Reklam1.jpg"
import Reklam2 from "../../../images/reklam2.jpg"


const Reklam = () => {
    return (
        <div className="reklam_area">
            <div className="reklam">
                <img src={Reklam1} alt="Reklam" />
            </div>
            <div className="reklam">
                <img src={Reklam2} alt="Reklam" />
            </div>
        </div>
    )
}

export default Reklam