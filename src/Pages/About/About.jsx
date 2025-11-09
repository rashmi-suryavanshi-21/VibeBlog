import React from 'react'
import './About.css'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
const About = () => {
    return (
        <div className='about'>
            <Navbar />
            <div className='about-content'>
            <h1>About Vibe Blogs</h1>
            <p>Vibe Blogs is a creative space where stories, thoughts, and vlogs come alive.
                Built using React.js, this platform lets users explore and share unique experiences with the world.</p>
            <h3>Made with ❤️ by Rashmi Suryavanshi</h3>
            </div>
            <Footer className="footer-about"/>
        </div>
    )
}

export default About