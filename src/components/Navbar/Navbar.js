import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <div className="logo">
                <a href="/">Ecwid</a>
            </div>
            <ul className='leftul'>
                <li>
                    Sell
                </li>
                <li>
                    Market
                </li>
                <li>
                    Manage
                </li>
            </ul>
            <ul className='rightul'>
                <li>
                    Learn
                </li>
                <li>
                    Partners
                </li>
                <li>
                    Pricing
                </li>
                <li>
                    Login
                </li>

            </ul>
            <button className="btn">
            Get started for FREE
            </button>
        </nav>
    </div>
  )
}

export default Navbar