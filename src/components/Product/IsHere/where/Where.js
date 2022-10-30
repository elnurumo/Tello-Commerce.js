import React from 'react'
import { Link } from 'react-router-dom'

const Where = ({ arrow, text, key, link }) => {

    const Arrow = arrow ? <img src={arrow} alt="Arrow" className="arrow" /> : null

    return (
        <>
            <Link to={link} key={key} className="ishere_home">
                <h3 className="name">{text}</h3>
                {Arrow}
            </Link>
        </>
    )
}

export default Where