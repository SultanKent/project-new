import React from 'react'
import './Sponsors.css'
import { motion } from "framer-motion"
import Google from '../../assets/Google.png'
import Microsoft from '../../assets/Microsoft.png'
import Airhub from '../../assets/Airhub.png'
import Axure from '../../assets/Axure.png'
import Apple from '../../assets/Apple.png'
import Facebook from '../../assets/Facebook.png'
import Nokia from '../../assets/Nokia.png'
import Oracle from '../../assets/Oracle.png'
import Sponsors1 from '../../assets/Sponsors1.png'
import Sponsors2 from '../../assets/Sponsors2.png'

const Sponsors = () => {
  const images = [
    { src: Google, alt: 'Image 1' },
    { src: Microsoft, alt: 'Image 2' },
    { src: Airhub, alt: 'Image 3' },
    { src: Axure, alt: 'Image 4' },
    { src: Apple, alt: 'Image 5' },
    { src: Facebook, alt: 'Image 6' },
    { src: Nokia, alt: 'Image 7' },
    { src: Oracle, alt: 'Image 8' },
  ];
  const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2, duration: 0.5 },
    }),
  }
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2, once: true }}
    className="Sponsors">
      <img src={Sponsors1} className="icon1"/>
      <img src={Sponsors2} className="icon2"/>
      <motion.h2 variants={textAnimation} custom={1}>Our Sponsors</motion.h2>
      <div className="sponsors_main">
        <div className="sponsors_img">
        {images.slice(0, 4).map((image, index) => (
          <motion.img variants={textAnimation} custom={index + 1} key={index} src={image.src} alt={image.alt} />
        ))}
        </div>
        <div className="sponsors_img">
        {images.slice(4, 8).map((image, index) => (
          <motion.img variants={textAnimation} custom={index + 1} key={index} src={image.src} alt={image.alt}/>
        ))}
        </div>
        <motion.button
        whileHover={{ scale: 1.1 }}
        whileTop={{ scale: 0.9 }}
        className='btn Sponsor_button'>Become a Sponsor</motion.button>
      </div>
    </motion.div>
  )
}

export default Sponsors;