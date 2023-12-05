import React from 'react';
import './Sidebar.css';
import bag from '../Assets/Briefcase.png';
import txt from '../Assets/StatBoard.png';
import menu from '../Assets/Circled Menu.png';
import support from '../Assets/Support.png';
import puzzle from '../Assets/Puzzle.png';
import help from '../Assets/Help.png';
import logout from '../Assets/Shutdown.png';

const SideBar = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { icon: menu, label: 'Dashboard', id: 'dashboard' },
    { icon: support, label: 'Support', id: 'support' },
    { icon: puzzle, label: 'Plugins', id: 'plugins' },
    { icon: help, label: 'Help', id: 'help' },
  ];

  const handleClick = (menuId) => {
    setActiveMenu(menuId);
  };

  return (
    <div className='side-bar'>
      <div className='bagdiv'>
        <img src={bag} alt="" />
        <img src={txt} alt="" />
      </div>
      <div className='sideitems'>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`sidecontent ${activeMenu === item.id ? 'active1' : ''}`}
            onClick={() => handleClick(item.id)}
          >
            <img src={item.icon} alt="" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <div className='logout'>
        <span>Logout</span>
        <img src={logout} alt="" />
      </div>
    </div>
  );
};

export default SideBar;
