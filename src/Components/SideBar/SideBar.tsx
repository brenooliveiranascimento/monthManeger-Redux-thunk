import React from 'react';
import { AiOutlineWallet, AiOutlineCalendar, AiOutlineSetting } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { ButtonArea, SideButton, SideContent } from './SideBarStyles';

function SideBar() {
  const location = useLocation().pathname;
  return (
    <SideContent>
      <h2>
        monthly fee manager
      </h2>
      <ButtonArea>
        <Link
          style={{ textDecoration: 'none' }}
          className="LinksSideBar"
          to="/"
        >
          <SideButton
            color={location === '/' ? '#5338BF' : '#29282E'}
            value="/"
          >
            <AiOutlineWallet />
            <h3>My Wallet</h3>
          </SideButton>
        </Link>
        <Link
          className="LinksSideBar"
          style={{ textDecoration: 'none' }}
          to="Monthly"
        >
          <SideButton
            color={location === '/Monthly' ? '#5338BF' : '#29282E'}
            type="button"
            value="Monthly"
          >
            <AiOutlineCalendar />
            <h3>My Monthly</h3>
          </SideButton>
        </Link>
        <Link
          className="LinksSideBar"
          style={{ textDecoration: 'none' }}
          to="/Config"
        >
          <SideButton
            color={location === '/Config' ? '#5338BF' : '#29282E'}
            type="button"
            value="Config"
          >
            <AiOutlineSetting />
            <h3>Config</h3>
          </SideButton>
        </Link>
      </ButtonArea>
    </SideContent>
  );
}

export default SideBar;