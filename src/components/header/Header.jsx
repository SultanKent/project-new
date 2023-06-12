import React from 'react'
import './Header.css'
import { delay, motion } from "framer-motion"
import videoIcon from '../../assets/Vector.png'

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
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2, once: true}}
    className="Header">
        <div className="navbar">
            <div className="nav-r" variants={textAnimation}>
                <h2 style={{ fontFamily: 'Montserrat', width: '125px', height: '45px'}}>Musik.</h2>
            </div>
            <div className="nav-l">
                <ul>
                    <li>HOME</li>
                    <li>SPEAKERS</li>
                    <li>SCHEDULE</li>
                    <li>CONTACT US</li>
                </ul>
                <motion.button
                whileHover={{ scale: 1.1 }}
                whileTop={{ scale: 0.9 }}
                onClick={() => null}
                className='btn nav-btn'>GET TICKETS</motion.button>
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
  )
}

export default Header