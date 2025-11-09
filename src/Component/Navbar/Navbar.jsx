import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className='top-navabar'>
        <nav>
            <div className="nav-left flex-div">
            <h2>VibeBlogs</h2>
            </div>
            
            <div className="nav-right flex-div">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/add'>WriteBlog</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar