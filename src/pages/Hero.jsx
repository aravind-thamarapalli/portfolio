import React from 'react'
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <>
    <div className='home'>
        <div className='hero'>
            <h1>A Mern Stack</h1>
            <h1>Developer</h1>
        </div>
        <footer>
            <h2>Lets Connect</h2>
            <div className="footer-divs">
                <div className="footer-div">
                    <a href="">
                    <FaEnvelope />
                    </a>
                </div>
                <div className="footer-div">
                    <a href="">
                    <FaLinkedinIn />
                    </a>
                </div>
                <div className="footer-div">
                    <a href="">
                    <FaGithub />
                    </a>
                </div>
            </div>
        </footer>
        </div>
        <div className="project-tab">
            <h2>Projects</h2>
        <div className="projects">
            <div className="project-div">
                <h3>Project 1</h3>
                <p>Project 1 description</p>
            </div>
            <div className="project-div">
                <h3>Project 2</h3>
                <p>Project 2 description</p>
            </div>
            <div className="project-div">
                <h3>Project 3</h3>
                <p>Project 3 description</p>
            </div>
            <div className="project-div">
                <h3>Project 1</h3>
                <p>Project 1 description</p>
            </div>
            <div className="project-div">
                <h3>Project 2</h3>
                <p>Project 2 description</p>
            </div>
            <div className="project-div">
                <h3>Project 3</h3>
                <p>Project 3 description</p>
            </div>
            <div className="project-div">
                <h3>Project 1</h3>
                <p>Project 1 description</p>
            </div>
            <div className="project-div">
                <h3>Project 2</h3>
                <p>Project 2 description</p>
            </div>
            <div className="project-div">
                <h3>Project 3</h3>
                <p>Project 3 description</p>
            </div>
        </div>
        </div>
    </>
  )
}

export default Hero
