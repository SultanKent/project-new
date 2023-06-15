import React from 'react'
import './Footer.css'
import { motion } from "framer-motion"
import Footer1 from '../../assets/Footer1.png'
import Footer2 from '../../assets/Footer2.png'
import Footer3 from '../../assets/Footer3.png'
import Facebook from '../../assets/Fb.png'
import Twitter from '../../assets/Twitter.png'
import In from '../../assets/In.png'
import Instagram from '../../assets/Instagram.png'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footer_main">
            <div className="footer_main1">
                <div className="footer_l">
                <div className='footer_l_text1'>
                    <h2>Contact us</h2>
                    <p>Have an inquiry? We'll be happy to assist you</p>
                </div>
                <div className='footer_l_text2'>
                    <div className='footer_l_texts2'>
                        <img src={Footer1}/>
                        <p>+92 333 6527366</p>
                    </div>
                    <div className='footer_l_texts2'>
                        <img src={Footer2}/>
                        <p>abuzer@greelogix.com</p>
                    </div>
                    <div className='footer_l_texts2'>
                        <img src={Footer3} style={{width: '20px', height: '25px'}}/>
                        <p>Plot 252, Block L Phase 2 Johar Town, Lahore, PK</p>
                    </div>
                    </div>
                </div>
                <div className="footer_r">
                    <form className='form'>
                    <h2>Fill in your details</h2>
                    <div className='label1'>
                    <label>Name</label>
                    <input type='text'/>
                    </div>
                    <div className='label1'>
                    <label>Email</label>
                    <input type='email'/>
                    </div>
                    <div className='label2'>
                    <label>Message</label>
                    <input type='text'/>
                    </div>
                    <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTop={{ scale: 0.9 }}
                    className='btn footer_btn'>Submit</motion.button>
                    </form>
                </div>
            </div>

            <div className="footer_main2" id='Footer'>
            <h2 style={{ fontFamily: 'Montserrat', width: '125px', height: '45px'}}>Musik.</h2>
            <div className="footer_main_l_r">
                <div className="footer_main2_l">
                <ul>
                    <li>HOME</li>
                    <li>COMPANY</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                    <li>SITEMAP</li>
                </ul>
                </div>
                <div className="footer_main2_r">
                    <div className="footer_main2_r1">
                    <img src={Facebook}/>
                    <img src={Twitter}/>
                    <img src={In}/>
                    <img src={Instagram}/>
                    </div>
                    <div className="footer_main2_r2">
                    <p>© musik.com, 2021 </p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer