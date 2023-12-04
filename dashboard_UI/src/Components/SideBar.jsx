import React from 'react'
import './Sidebar.css'
import bag from '../Assets/Briefcase.png'
import txt from '../Assets/StatBoard.png'
import menu from '../Assets/Circled Menu.png'
import support from '../Assets/Support.png'
import puzzle from '../Assets/Puzzle.png'
import help from '../Assets/Help.png'
import logout from '../Assets/Shutdown.png'

const SideBar = () => {
  return (
    <div className='side-bar'>

      <div className='bagdiv'>
         <img src={bag} alt="" srcset="" />
         <img src={txt} alt="" srcset="" />
      </div>

      <div className='sideitems'>
         <div className='sidecontent'>
           <img src={menu} alt="" srcset="" />
           <span>Dashboard</span>
         </div>
         <div className='sidecontent'>
         <img src={support} alt="" srcset="" />
           <span>Support</span>
         </div>
         <div className='sidecontent'>
         <img src={puzzle} alt="" srcset="" />
           <span>Plugins</span>
         </div>
         <div className='sidecontent'>
         <img src={help} alt="" srcset="" />
           <span>Help</span>
         </div>
      </div>

      <div className='logout'>
         <span>Logout</span>
         <img src={logout} alt="" srcset="" />
      </div>
    </div>
  )
}

export default SideBar