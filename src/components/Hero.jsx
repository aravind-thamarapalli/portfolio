import React, { useState } from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone, PiInstagramLogoDuotone } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {

    const [handleHam, setHandleHam] = useState(false); 

    useGSAP(() =>{
        gsap.from('.navbar',{
            y:-200,
            opacity: 0,
            duration: 1,
        })
        gsap.from('.tab2' ,{
            x: -60,
            opacity: 0,
            duration: .75,
            delay:1
        })
        gsap.from('.tab3' ,{
            x: -120,
            opacity: 0,
            duration: .75,
            delay:1
        })
        gsap.from('.tab4' ,{
            x: -180,
            opacity: 0,
            duration: .75,
            delay:1
        })
        gsap.from('.heading1 h2', {
            x: -100,
            opacity: 0,
            duration: .6
        })
        gsap.from('.heading1', {
            x: -200,
            opacity: 0,
            duration: .8
        })
        gsap.from('.text-var', {
            x: -200,
            opacity: 0,
            duration: 1
        })
        gsap.from('.details', {
            x: -300,
            duration: 1.2,
            opacity: 0
        })
        gsap.from('link-icons',{
            rotation: 180
        })

        gsap.from('.main-body-2', {
            x: 300,
            y: 300,
            opacity: 0,
            duration: 1,

        })
    })

    return (
        <>
            <div className='main'>
                <div className="navbar">
                    <div className="logo">Portfolio <span>.</span></div>
                    <div className={`tabs ${handleHam === true && 'active'}`}>
                        <Link to='/hero' className="tab-main tab1">HOME</Link>
                        <Link to='/about' className="tab tab2">ABOUT</Link>
                        <Link to='/projects' className="tab tab3">PROJECTS</Link>
                        <Link to='/contact' className="tab tab4">CONTACT</Link>
                    </div>
                    <button  className='open-menu' onClick={() => setHandleHam(!handleHam)}><RxHamburgerMenu /></button>

                </div>
                <div className="main-body">
                    <div className="main-body-1">
                        <div className="headings">
                            <div className='heading1'>
                                <h2>Hello, It's me </h2>
                                <span className='name'>Aravind Thamarapalli</span>
                            </div>
                            <div className='text-var'>
                                <p>and, I'm a
                                <TypeAnimation className='sequencer' sequence={['Developer', 2000,
                                    'Student', 2000,
                                    'Learner', 2000,
                                ]} speed={50} repeat={Infinity} /></p>
                            </div>
                        </div>
                        <div><p className="details">This is the official portfolio to showcase my all works related to development and projects</p></div>
                        <div className='link-icons'>
                            <a href=""><PiGithubLogoDuotone /></a>
                            <a href=""><PiLinkedinLogoDuotone /></a>
                            <a href=""><PiInstagramLogoDuotone /></a>
                            <a href=""><MdOutlineMail /></a>
                        </div>
                    </div>
                    <div className="main-body-2">
                        <img src="../assets/avatar.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
