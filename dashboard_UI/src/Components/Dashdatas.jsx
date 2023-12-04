import React from 'react'
import './Dashdatas.css'
import pic from '../Assets/profilepic.jpg'
import Graph from './Graph'
import CountGraph from './CountGraph'
import TableData from './TableData'
import Profile from './Profile'

const Dashdatas = () => {
  return (
    <div className='dashdata'>
        
        <div className='topside'>
          <span>Good Morning ! 🌞</span>

          <div className="profile">
             <div className="username">
                <span>John Doe</span>
                <span className='span1'>jhon@doe.com</span>
             </div>
             <img src={pic} alt="" srcset="" />
          </div>
        </div>

        <div className='middleside'>
          <Graph/>
          <CountGraph/>
        </div>

        <div className='lastside'>
          <TableData/>
          <Profile/>
        </div>

    </div>
  )
}

export default Dashdatas