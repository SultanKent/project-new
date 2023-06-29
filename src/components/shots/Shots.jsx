import React, { useEffect, useRef, useState } from 'react';
import './Shots.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Arrow1 from '../../assets/Arrow1.png';
import Arrow2 from '../../assets/Arrow2.png';
import Shots1 from '../../assets/Shots1.png';
import Shots2 from '../../assets/Shots2.png';
import Shots3 from '../../assets/Shots3.png';
import Shots4 from '../../assets/Shots4.png';
import Shots5 from '../../assets/Shots5.png';
import Comments from '../../assets/comments.png';

const Shots = () => {
  
  const [shots, setShots] = useState([
    { img: Shots1, likes: '♡ 412', comments: Comments, p1: 'Lorem Ipsum Amet', p2: '#music #concert #conference #london #event #artist #dj #soundtrack #dance' },
    { img: Shots2, likes: '♡ 412', comments: Comments, p1: 'Lorem Ipsum Amet', p2: '#music #concert #conference #london #event #artist #dj #soundtrack #dance' },
    { img: Shots3, likes: '♡ 412', comments: Comments, p1: 'Lorem Ipsum Amet', p2: '#music #concert #conference #london #event #artist #dj #soundtrack #dance' },
    { img: Shots4, likes: '♡ 412', comments: Comments, p1: 'Lorem Ipsum Amet', p2: '#music #concert #conference #london #event #artist #dj #soundtrack #dance' },
    { img: Shots5, likes: '♡ 412', comments: Comments, p1: 'Lorem Ipsum Amet', p2: '#music #concert #conference #london #event #artist #dj #soundtrack #dance' }
  ]);
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
    <motion.div className="Shots">
      <div className="Shots_main">
        <motion.h2 variants={textAnimation} custom={1}>See Our Best Shots</motion.h2>
        <img
            src={Arrow1}
            className="Arrow1"
          />
          <div className="Shots_img">
          <Swiper 
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={3}
          slidesPerView={3}
          breakpoints={{
            1440: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            480: {
              slidesPerView: 3,
            },
            320: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            nextEl: '.Arrow2',
            prevEl: '.Arrow1'
          }}
          >
            {shots.map((item, index) => (
              <SwiperSlide key={index}>
              <motion.div variants={textAnimation} custom={index + 1} key={index}
              className={'span_img1'}>
                <img src={item.img} />
                <div className="shot_spans">
                <div className="likes_comments">
                <p>{item.likes}</p>
                <div className="comments">
                <img src={item.comments} alt="Comments" style={{ width: '20px', height: '19px' }} />
                <p>140</p>
                </div>
                </div>
                <p>{item.p1}</p>
                <p>{item.p2}</p>
                </div>
              </motion.div>
              </SwiperSlide>
            ))}
            </Swiper>
          </div>
          <img
            src={Arrow2}
            className="Arrow2"
          />
        </div>
    </motion.div>
  );
};

export default Shots;
