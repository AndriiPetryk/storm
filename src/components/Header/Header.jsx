import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import SearchBox from './SearchBox/SearchBox';
import gear from '../assets/img/Gear.svg';
import notifications from '../assets/img/Notifications.svg';
import logo from '../assets/img/Logo.png';

const Header = () => {
  return (
    <header>
      <Navbar expand='lg' collapseOnSelect className='container d-flex mb-3'>
          <LinkContainer to='/' className="me-auto p-2">
            <Navbar.Brand>
              <img src={logo} alt='storm' />
            </Navbar.Brand>
          </LinkContainer>
          <SearchBox />
          <Navbar.Toggle aria-controls='basic-navbar-nav' className="p-2"/>
          <Navbar.Collapse id='basic-navbar-nav' className="p-2">
            <Nav className='ms-auto'>
              <div>
                <img src={gear} alt='Gear' />
              </div>
              <div>
                <img src={notifications} alt='Gear' />
              </div>
              <div>
                <img src={notifications} alt='Gear' />
              </div>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </header>
  );
};
export default Header;
