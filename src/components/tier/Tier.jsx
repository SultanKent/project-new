import React from 'react'
import './Tier.css'
import { motion } from "framer-motion"

const Tier = () => {
  const data = [
    { h4text: 'Basic', h1price: '100$', ptext1: '1 Seat Available',
     ptext2: 'Access to Wifi Router',ptext3: 'Free Food & Coffee', btn: "Get Tickets"},
    { h4text: 'Standard', h1price: '150$', ptext1: '1 Seat Available',
     ptext2: 'Access to Wifi Router',ptext3: 'Free Food & Coffee', btn: "Get Tickets"},
    { h4text: 'Premium', h1price: '200$', ptext1: '2 Seats Available',
     ptext2: 'Access to Wifi Router',ptext3: 'Free Food & Coffee', btn: "Get Tickets"}
  ]
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
    className="Tier">
        <motion.h2 variants={textAnimation} custom={1}>Choose a Tier that's right for you</motion.h2>
        <div className="tiers">
          {data.map((item, index) => (
          <motion.span variants={textAnimation} custom={index + 1} key={index} className={`tiers_top ${index === 1 ? 'tiers_top1' : ''} ${index === 2 ? 'tiers_top2' : ''}`}>
            <div className={`tiers_main ${index === 1 ? 'blue' : ''} ${index === 2 ? 'red' : ''}`}>
            <h4>{item.h4text}</h4>
            <h1 >{item.h1price}</h1>
            </div>
            <p>{item.ptext1}</p>
            <p>{item.ptext2}</p>
            <p>{item.ptext3}</p>
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTop={{ scale: 0.9 }}
            className={`${index === 1 ? 'tiers_btn' : 'tiers_btn2' }`}>{item.btn}</motion.button>
          </motion.span>
          ))}
        </div>
    </motion.div>
  )
}

export default Tier