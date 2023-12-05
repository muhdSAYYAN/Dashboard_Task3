import React, { useState } from 'react';
import './Dashboard.css';
import SideBar from './SideBar';
import Dashdatas from './Dashdatas';
import DashDataMain from './DashDataMain';

const DashboardPage = () => {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className='dashboard'>
      <SideBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <DashDataMain activeMenu={activeMenu} />
    </div>
  );
};

export default DashboardPage;