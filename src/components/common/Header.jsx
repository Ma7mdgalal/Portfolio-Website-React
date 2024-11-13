import React from 'react';
import { navlink } from "../data/Dummydata";
import logo from "../data/images/logo.png";
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';

export const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <header>
      <div className="container flexsb">
        <div className="logo">
          <img src={logo} alt="" data-aos="zoom-in-right" />
        </div>
        <div className={ responsive ? "hideMenu":"nav"}>
          {navlink.map((links, i) => (
            <Link to={links.url} key={i} data-aos="zoom-in-left">{links.text}</Link>
          ))}
        </div>
        <button className='toggle' onClick={() => setResponsive(!responsive) }>
        <Menu className='icon'></Menu> 
        </button>
        
      </div>
    </header>
  );
};