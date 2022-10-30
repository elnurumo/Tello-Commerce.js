import React from 'react'
import AdvantageCard from './Advantage_card/AdvantageCard'
import medal from "../../../../images/medal.svg"
import card from "../../../../images/card.svg"
import box from "../../../../images/box.svg"
// import "./Advantage.scss"



const Advantage = () => {
    return (
        <div className="advantage_area">
            <div className="advantages">
                <AdvantageCard icon={box} name={"Çatdırılma"} />
                <AdvantageCard icon={card} name={"Kredit"} />
                <AdvantageCard icon={medal} name={"Zəmanət"} />
            </div>
        </div>
    )
}

export default Advantage