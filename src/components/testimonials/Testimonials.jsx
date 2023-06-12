import React from 'react'
import './Testimonials.css'
import { delay, motion } from "framer-motion"
import Quotes1 from '../../assets/Quotes1.png'
import Quotes2 from '../../assets/Quotes2.png'
import Avatar from '../../assets/Avatar.png'

const Testimonials = () => {
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
    className="Testimonials">
      <div className="testimonials_main">
        <motion.h2 variants={textAnimation} custom={1}>Testimonials</motion.h2>
        <motion.span variants={textAnimation} custom={2} className='testimonials_span'>
          <div className="testimonials_span1">
          <img src={Quotes1} className='Quotes1'/>
          <p style={{width: '650px', textAlign: 'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <img src={Quotes2} className='Quotes2'/>
          </div>
          <div className='testimonials_span2'>
          <img src={Avatar}/>
          <h4>Johnny Doe</h4>
          <p>ipsum.com</p>
          </div>
        </motion.span>
      </div>
    </motion.div>
  )
}

export default Testimonials