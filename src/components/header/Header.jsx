import React, { useEffect, useState } from 'react';
import './Header.css'
import { Link } from 'react-scroll';
import { delay, motion } from "framer-motion"
import videoIcon from '../../assets/Vector.png'
import Menu from '../../assets/Menu.png'
import Menu1 from '../../assets/Menu1.png'

const Header = () => {
  const textAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2, duration: 0.5 },
      once: true,
    }),
  }

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isMenuOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true}}
      className="Header"
    >
      <div className="navbar">
        <div className="nav-r" variants={textAnimation}>
          <h2 style={{ fontFamily: 'Montserrat', width: '125px', height: '45px'}}>Musik.</h2>
        </div>
        <div className="nav-l">
          {isMobile ? (
            <div className="menu-toggle" onClick={handleMenuToggle}>
              <img src={Menu} style={{width: '35px', height: '30px'}}/>
            </div>
          ) : (
            <ul>
              <li>
                <Link to="Sponsors" smooth={true} duration={500}>
                  OUR SPONSORS
                </Link>
              </li>
              <li>
                <Link to="About" smooth={true} duration={500}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to="Singers" smooth={true} duration={500}>
                  SINGERS
                </Link>
              </li>
              <li>
                <Link to="Footer" smooth={true} duration={500}>
                  CONTACTS
                </Link>
              </li>
            </ul>
          )}
          {isMenuOpen && isMobile && (
            <div className="menu-overlay">
              <div className="menu-content">
                <div className="close-button" onClick={handleMenuToggle}>
                  <img src={Menu1} style={{width: '35px', height: '30px'}}/>
                </div>
                <ul>
                  <li>
                    <Link
                      to="Sponsors"
                      smooth={true}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                    >
                      OUR SPONSORS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="About"
                      smooth={true}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Singers"
                      smooth={true}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                    >
                      SINGERS
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="Footer"
                      smooth={true}
                      duration={500}
                      onClick={() => setMenuOpen(false)}
                    >
                      CONTACTS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <motion.div variants={textAnimation} custom={1} className="header_main">
        <h1>The Best Experience Of<br/> <span>Music</span> In 2021</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae ligula<br/> placerat, eleifend ex non, vehicula libero. Suspendisse eget tellus lectus.</p>
        <div className="header-buttons">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTop={{ scale: 0.9 }}
            className='btn header-main-btn'>Get Started</motion.button>
          <div>
            <img src={videoIcon}/>
            <h5>Watch Video</h5>
          </div>
        </div>
      </motion.div>

      <div className="header_main2">
        <h1>
          <span>22d</span>
          <span>13h</span>
          <span>46m</span>
          <span>18s</span>
        </h1>
      </div>
    </motion.div>
  );
}

export default Header;