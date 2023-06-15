import React from 'react'
import './Singers.css'
import { motion } from "framer-motion"
import Singers1 from '../../assets/Singers1.png'
import Singers2 from '../../assets/Singers2.png'
import Singers3 from '../../assets/Singers3.png'
import Singers4 from '../../assets/Singers4.png'
import sinPattern from '../../assets/sinpattern.png'
import sinConfetti from '../../assets/sinconfetti.png'
import sinRectangle from '../../assets/sinrectangle.png'

const Singers = () => {
  const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
  }
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2, once: true }}
    className="Singers" id='Singers'>
      <img src={sinPattern} className="sinPattern"/>
      <img src={sinConfetti} className="sinConfetti"/>
      <img src={sinRectangle} className="sinRectangle"/>
        <div className="Singers_main">
        <motion.div
         variants={textAnimation} className="left-s">
            <div className="left-s1">
            <h4 style={{fontSize: '24px'}}>Singers</h4>
            <p className='Singers_p'>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</p>
        </div>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTop={{ scale: 0.9 }}
        className='btn singers_btn'>View All Singers</motion.button>
        </motion.div>
        <div className="right-s">
          <div>
            <img src={Singers1} style={{zIndex: '2'}} className="singers_img"/>
            <img src={Singers1} className="slide"/>
            <img src={Singers2} style={{zIndex: '2'}} className="singers_img"/>
            <img src={Singers2} className="slide2"/>
          </div>
          <div>
            <img src={Singers3} style={{zIndex: '2'}} className="singers_img"/>
            <img src={Singers3} className="slide"/>
            <img src={Singers4} style={{zIndex: '2'}} className="singers_img"/>
            <img src={Singers4} className="slide2"/>
          </div>

        </div>
    </div>
    </motion.div>
  )
}

export default Singers