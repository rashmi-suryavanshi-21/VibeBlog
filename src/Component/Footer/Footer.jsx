import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">

        <div className="footer-top">
          <h4>Quick Links</h4>
          <div className="links">
            <ul>
            <Link to='/'
            ><li>Home</li></Link>
            <Link to='/add'><li>WriteBlog</li></Link>
            <Link to='/about'><li>About</li></Link>
          </ul>
          </div>
        </div>

      <div className="footer-bottom">
        <div className="social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <li><FaInstagram /></li>
            <li><FaTwitter /></li>
            <li><FaLinkedin /></li>
          </div>
        </div>
        <div className="bottom">
          <p>© 2025 VibeBlogs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
