import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import './Navbar.css';

const Navbar = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  }
  
  const scrollToBottom = () => {
    scroll.scrollToBottom();
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
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
          <li>
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
          <li>
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
          <li>
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