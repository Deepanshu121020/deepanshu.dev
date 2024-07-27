import { Container, Nav, Navbar } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logo1 from '../assets/img/logo1.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';



export const NavBar = () => {

  const [activeLink, setactiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

// activeLink = 'home'
// scrolled = false

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [])


  const onUpdateActiveLink = (value) => {
    setactiveLink(value);
  }

  const handleLetsConnectClick = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar expand="lg" className={ scrolled ? "scrolled" : "" } >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo1} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='https://www.linkedin.com/in/deepanshu-s-7677a4103/' target='blank'><img src={navIcon1} alt='linkedin' /></a>
              <a href='https://www.facebook.com/deeps4829' target='blank'><img src={navIcon2} alt='facebook' /></a>
              <a href='https://github.com/Deepanshu121020' target='blank'><img src={navIcon3} alt='github' /></a>
            </div>
            <button className='vvd' onClick={ handleLetsConnectClick}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
