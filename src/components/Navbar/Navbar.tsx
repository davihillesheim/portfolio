import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollToTop, scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';
import './Navbar.css';

const Navbar = () => {

  return (
    <div className="nav">
      <nav>
        <ul>
          <li className="nav-item nav-text">
            <Link
            className='link'
            activeClass='active'
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
            >
            Home
            </Link>
          </li>
          <li className="nav-item nav-text">
            <Link
            className='link'
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            About
            </Link>
          </li>
          <li className="nav-item nav-text">
            <Link
            className='link'
            activeClass='active'
            to='projects'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            Projects
            </Link>
          </li>
          <li className="nav-item nav-text">
            <Link
            className='link'
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToBottom}
            >
            Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;