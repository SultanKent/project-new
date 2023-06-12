import React from 'react'
import './About.css'
import { motion } from "framer-motion"
import about1 from '../../assets/about1.png'
import about2 from '../../assets/about2.png'
import Icon from '../../assets/AboutIcon.png'

const About = () => {
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
    className="About">
      <img src={Icon} className="Icon"/>
        <div className="About_main">
            <div className="left-a">
              <img src={about1}/>
              <img src={about2}/>
            </div>
        <motion.div variants={textAnimation} className="right-a">
          <div className="right-a1">
          <h4 style={{fontSize: '24px'}}>About Musik</h4>
          <p>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus. Sed tempus enim non massa mattis iaculis. In quis massa risus</p>
          </div>
          <motion.button
          whileHover={{ scale: 1.1 }}
          whileTop={{ scale: 0.9 }}
          className='btn about_btn'>Learn more </motion.button>
        </motion.div>
        </div>
    </motion.div>
  )
}

export default About