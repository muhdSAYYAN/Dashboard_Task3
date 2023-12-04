import React from 'react'
import './Profile.css'
import ceo from '../Assets/media.png'
import insta from '../Assets/instagram.png'
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'

const Profile = () => {
  return (
    <div className='ceoprofile'>
        <img src={ceo} alt="" srcset="" />
        <span>John deo</span>
        <span className='spanceo'>CEO</span>
        <div className="medias">
            <img src={facebook} alt="" srcset="" />
            <img src={insta} alt="" srcset="" />
            <img src={twitter} alt="" srcset="" />
        </div>
    </div>
  )
}

export default Profile