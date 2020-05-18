import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  return (
    <div>
      <Navbar color='dark' dark expand='md'>
        <NavbarBrand href='/'>The Art Gallery</NavbarBrand>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink href='/login'>Login/Register</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
export default NavBar;
