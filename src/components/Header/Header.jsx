import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from '../SearchBox/SearchBox';
import gear from '../../assets/img/Gear.svg';
import notifications from '../../assets/img/Notifications.svg';
import logo from '../../assets/img/Logo.png';
import user from '../../assets/img/User.svg';
import './header.css';

const Header = () => {
  return (
    <header className='header'>
      <Navbar expand='lg' collapseOnSelect className='container d-flex mb-3'>
        <LinkContainer to='/' className='me-auto p-2'>
          <Navbar.Brand>
            <img src={logo} alt='storm' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='p-2 navbar-toggle' />
        <SearchBox />
        <Navbar.Collapse id='basic-navbar-nav' className='navbar-collapse p-2'>
          <Nav className='ms-auto d-flex justify-content-start flex-row'>
            <div className='settings'>
              <img src={gear} alt='Gear' />
            </div>
            <div className='notifications'>
              <img src={notifications} alt='notifications' />
            </div>
            <div className='user-information-wrap d-flex align-content-center flex-wrap align-items-center'>
              <img src={user} alt='user' />
              <span className='user-information'>Adriana Arias</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
