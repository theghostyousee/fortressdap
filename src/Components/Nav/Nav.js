import React from 'react'
import './Nav.css'
import {useRef} from "react";
import { Link } from "react-router-dom";
import logo from '../../media/logo.svg'
import { FaTimes, FaBars } from 'react-icons/fa';


function Nav() {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  
     return (
        <div className='top'>
            <nav ref={navRef}>
                <div className='list'>
                    <Link to="/" >Dashboard</Link>
                </div>
                <div className='list'>
                    <Link to="/presale" >Presale</Link>
                </div>

                <div className='list'>
                    <Link to="/stake" >Stake</Link>
                </div>
                <div className='list'>
                    <Link to="/pad" >Launchpad</Link>
                </div>
                <div className='list'>
                    <Link to="/vaults" >Vaults</Link>
                </div>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>

                    <FaTimes/>

                </button>

            </nav>
            <button  className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>
        </div>
    );
}

export default Nav;
