import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../src/assets/images/logo.svg'
import social1 from '../../src/assets/images/nav-icon1.svg'
import social2 from '../../src/assets/images/github-mark-white.svg'
import social3 from '../../src/assets/images/Gmail_icon_(2020).svg'
import { BrowserRouter as Router } from "react-router-dom"


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('about-me');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
              <Nav.Link href="#about-me" className={activeLink === 'about-me' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about-me')}>About Me</Nav.Link>
              <Nav.Link href="#portfolio" className={activeLink === 'portfolio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('portfolio')}>Portfolio</Nav.Link>
              <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
            </Nav>
            <span className='navbar-socials'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/jamesteades/' target='_blank'><img src={social1} alt="LinkedIn" /></a>
              <a href='https://github.com/jeades92' target='_blank'><img src={social2} alt="Github" /></a>
              <a href='mailto:eadesj25@gmail.com'><img src={social3} alt="IG" /></a>
            </div>
                <button className='vvd'><span>Connect To Host</span></button>
          </span>

          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
}

