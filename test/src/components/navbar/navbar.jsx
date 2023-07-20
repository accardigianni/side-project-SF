import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../picture/liste.png';


export default function Navbar() {
    // initiate to false because we don't need toggle menu exept under 500 px
    const [toggleMenu, setToggleMenu] = useState(false);
    // return the width of the window
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        // return the opposite of togglemenu
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        // every resize of window will update changeWidth
        const changeWidth = () => {
            setLargeur(window.innerWidth)
            // drop auto the menu every time width >500
            if (window.innerWidth > 500) {
                setToggleMenu(false);
            }
        }
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    return (
        <nav>

            {/* short circuit operator, it's like a ternaire operation */}
            {(toggleMenu || largeur > 500) && (
                <ul className='liste'>
                    <li className='items'><Link to="/welcome" >welcome</Link></li>
                    <li className='items'><Link to="/fighters" >Tournoi</Link></li>
                    <li className='items'><Link to="/contact">contact</Link></li>
                </ul>
            )}
            <button onClick={toggleNavSmallScreen} className='button' alt="button menu" >
                <img src={logo} alt="picture menu"></img>

            </button>
        </nav>
    )
}
