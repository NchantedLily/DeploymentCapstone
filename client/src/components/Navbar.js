import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
<header className='cincy'>
<nav className="navbar navbar-expand-lg navbar-light">
    <Link className="navbar-brand" to='/'></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav text-white">
        <li className="nav-item ">
          <Link className="nav-link" to='/'>Home <span className="sr-only"></span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/food'>Food</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/brew'>Brew</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/events'>Events</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/historical'>Historical</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
</header>




  )
}

export default Navbar