import React, { useEffect, useRef } from 'react';
import './Sponsors.css';
import { motion, useAnimation } from 'framer-motion';
import Google from '../../assets/Google.png';
import Microsoft from '../../assets/Microsoft.png';
import Airhub from '../../assets/Airhub.png';
import Axure from '../../assets/Axure.png';
import Apple from '../../assets/Apple.png';
import Facebook from '../../assets/Facebook.png';
import Nokia from '../../assets/Nokia.png';
import Oracle from '../../assets/Oracle.png';
import Sponsors1 from '../../assets/Sponsors1.png';
import Sponsors2 from '../../assets/Sponsors2.png';

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

  const sponsorsRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= sponsorsRef.current.offsetTop
      ) {
        controls.start('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const imageVariants = {
    hiddenLeft: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
    hiddenRight: {
      x: 100,
      opacity: 0,
    },
  };

  return (
    <div className="Sponsors" id="Sponsors" ref={sponsorsRef}>
      <img src={Sponsors1} className="icon1" alt="Icon 1" />
      <img src={Sponsors2} className="icon2" alt="Icon 2" />
      <h2>Our Sponsors</h2>
      <div className="sponsors_main">
        <div className="sponsors_img">
          {images.slice(0, 4).map((image, index) => (
            <motion.img
              variants={imageVariants}
              initial="hiddenLeft"
              animate={controls}
              key={index}
              custom={index * 0.2}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
        <div className="sponsors_img">
          {images.slice(4, 8).map((image, index) => (
            <motion.img
              variants={imageVariants}
              initial="hiddenRight"
              animate={controls}
              key={index}
              custom={index * 0.2}
              src={image.src}
              alt={image.alt}
            />
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn Sponsor_button"
        >
          Become a Sponsor
        </motion.button>
      </div>
    </div>
  );
};

export default Sponsors;