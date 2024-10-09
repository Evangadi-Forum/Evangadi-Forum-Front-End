import React from 'react';
import './Footer.css';
import logo from '../../assets/logoFooter.png';
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <img src={logo} alt="Logo" className="footer-logo" />
                <div className="social-icons">
                    <a href="https://www.facebook.com/evangaditech" target="_blank" rel="noopener noreferrer" className="icon-circle">
                        <RiFacebookFill className="icon" />
                    </a>
                    <a href="https://www.instagram.com/evangaditech/" target="_blank" rel="noopener noreferrer" className="icon-circle">
                        <FaInstagram className="icon" />
                    </a>
                    <a href="https://www.youtube.com/@EvangadiTech" target="_blank" rel="noopener noreferrer" className="icon-circle">
                        <FaYoutube className="icon" />
                    </a>
                </div>
            </div>
            <div className="footer-column">
                <h3>Useful Links</h3>
                <ul>
                    <li><Link to="/how-it-works">How It Works</Link></li>
                    <li><Link to="/terms-of-service">Terms of Service</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Contact Info</h3>
                <p>Evangadi Networks</p>
                <p>support@evangadi.com</p>
                <p>+1202386-2702</p>
            </div>
        </footer>
    );
};

export default Footer;
