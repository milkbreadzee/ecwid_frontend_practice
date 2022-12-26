import React from 'react'
import './Header.css'
import shopping from './shopping.svg'
const Header = () => {
  return (
    <div className='cont'>
        <h1 className='title'>Start Selling Online for FREE!</h1>
        <p>
        We’re putting free trials on trial. With Ecwid, you get free FOREVER.<br /> Set up your free account once, and keep it as long as you like. Seriously.
        </p>
        <button className="button">Get started for free →</button>
        <p>No credit card required</p>
        <img src={shopping} alt="" className="ill" />
    </div>
  )
}

export default Header