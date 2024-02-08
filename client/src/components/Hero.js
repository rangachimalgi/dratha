import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';


const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                
                <img src={heroImg} alt="Hero Banner" className="hero-banner-image" />
            </div>
        </>
    )
}

export default Hero;