import React from 'react'

const SocialMedia = ({ name1, name2, name3, name4, name5 }) => {
  return (
    <div className="social_abouts">
      <h1 className='header_about'>{name1}</h1>
      <a className="about" href='#'>{name2}</a>
      <a className="about" href='#'>{name3}</a>
      <a className="about" href='#'>{name4}</a>
      {name5 ? <a className="about" href='#'>{name5}</a>: null}
    </div>
  )
}

export default SocialMedia