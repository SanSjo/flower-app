import React from 'react'
import './header.css'

export const Header = () => {
  return (
    <header>
      <div className="navContainer">
        <nav className="navbar fixed-top navbar-light ">
          <a className="navbar-brand" href="/">FLOWER APP</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

