import React from 'react'
import './Section.css'
import { delay, motion } from "framer-motion"
import Music from '../../assets/Music.png'
import Folk from '../../assets/Folk.png'
import Saxophone from '../../assets/Saxophone.png'
import Guitar from '../../assets/Guitar.png'
import Jazz from '../../assets/Jazz.png'
import rectangle1 from '../../assets/rectangle1.png'
import rectangle2 from '../../assets/rectangle2.png'

const Section = () => {
  const data = [
    { image: Music, h4text: 'Pop', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae' },
    { image: Folk, h4text: 'Folk', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae' },
    { image: Saxophone, h4text: 'Instrumental', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae', },
    { image: Guitar, h4text: 'Rock', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae' },
    { image: Jazz, h4text: 'Jazz', text: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae', }
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
    className="Section">
      <div className="Section_main">
      <motion.h2 variants={textAnimation}><span style={{color: '#381DDB'}}>Explore</span> By Category</motion.h2>
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="section_spans">
        <img src={rectangle1}/>
        <img src={rectangle2}/>
        <div className='rectangle3'></div>
      {data.map((item, index) => (
        <motion.span
          variants={textAnimation} custom={index + 1} key={index}>
          <img src={item.image} alt={`img ${index + 1}`} />
          <div className='span_text'>
          <h4>{item.h4text}</h4>
          <p>{item.text}</p>
          </div>
        </motion.span>
      ))}
      
      </motion.div>
      </div>
    </motion.div>
  )
}

export default Section