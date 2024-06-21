import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { theme } from "./../theme";
import logo from '../assets/logo.png';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar bg-base-100" style={{ backgroundColor: theme.green, color: theme.white, fontSize: '30px' }}>
      {/* Left section */}
      <div className="navbar-start">
        <img src={logo} alt="logo" style={{ height: '50px', width: '80px' }} />
      </div>

      {/* Center section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li className="relative">
            <button 
              onClick={handleDropdownToggle} 
              className="relative " >
              {isDropdownOpen ? '' : 'Key-Features'}
            </button>
            {isDropdownOpen && (
              <ul 
                className="absolute left-0 w-48 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg" 
                style={{ zIndex: 1 }}>
                <li>
                  <Link 
                    to="/crop-suitability" 
                    onClick={handleLinkClick} 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Management Strategies
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/weather-forecast" 
                    onClick={handleLinkClick} 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Weather Forecast
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/community-forum" 
                    onClick={handleLinkClick} 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Community Forum
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Right section */}
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Header;
