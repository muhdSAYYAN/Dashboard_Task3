import React from 'react'
import './Dashboard.css'
import SideBar from './SideBar'
import Dashdatas from './Dashdatas'

const DashboardPage = () => {
  return (
    <div className='dashboard'>

      <SideBar/>
      <Dashdatas/>

    </div>
  )
}

export default DashboardPage