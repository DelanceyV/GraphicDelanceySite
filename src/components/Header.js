import React, { useState } from 'react';
import { Nav, Navbar, Collapse, NavItem, Jumbotron, NavLink, NavbarBrand } from 'reactstrap';
import logoImg from '../images/graphicDelanceyWord_ImageLogoWhiteLines.png';
import faviconImg from '../images/Favicon.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Jumbotron fluid>
        <Navbar fixed='top' expand='lg'>
          <NavbarBrand onClick={toggle}>
            <img
              src={faviconImg}
              alt='GD logo'
              height={30}
              width={30}
            />
          </NavbarBrand>
          <Collapse id='responsive-navbar-nav' isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href='/'>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/gallery'>
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/catGame'>
                  Cat Game
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/cardGame'>
                  Card Game
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/reachOut'>
                  Reach Out
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <a href='/'>
              <img
                src={logoImg}
                alt='Graphic Delancey logo'
                width='80%'
              />
              </a>
            </div>
            <div className='col col-12'>
              <span className='rainbow title'>Delancey Vela</span>
            </div>
            <div className='col col-12'>
              <span>Web Developer | Graphic Designer</span>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
}

export default Header;