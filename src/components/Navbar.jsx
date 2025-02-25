import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
        <h1 className='logo'>Aravind Thamarapalli</h1>
        <ul className='nav-links'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
