import React from 'react'

const AdvantageCard = ({ icon, name }) => {
    return (
        <div className="advantage_card">
            <img src={icon} alt="icon" />
            <h6>{name}</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, error!</p>
        </div>
    )
}

export default AdvantageCard