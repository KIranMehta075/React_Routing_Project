import React from 'react';
import "./SideNavMenu.css"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData'
import { IconContext } from 'react-icons';

const SideNavMenu = ({ isOpen, toggleMenu, onClose}) => (
    <div className="side-menu-bar">
    <div className='navbar'>
      <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={toggleMenu} />
      </Link>
    </div>
    <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items' onClick={toggleMenu}>
        <li className='navbar-toggle'>
          <Link to='#' className='menu-bar-close'>
            <AiIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </div>
);




export default SideNavMenu;