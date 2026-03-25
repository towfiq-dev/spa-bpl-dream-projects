import React from 'react';
import dollarImg from '../../assets/image.png'
import NavbarImg from '../../assets/logo.png'
const Navbar = () => {
  return (
    <section className='mt-2.5'>
      <nav className="navbar bg-amber-600 shadow-sm max-w-310 mx-auto rounded">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Teams</a>
          <ul className="p-2">
            <li><a>Bangladesh</a></li>
            <li><a>India</a></li>
            <li><a>Pakistan</a></li>
          </ul>
        </li>
        <li><a>Fixture</a></li>
        <li><a>Schedules</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> <img className='w-15 h-15' src={NavbarImg} alt="" /> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Teams</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><a>Bangladesh</a></li>
            <li><a>India</a></li>
            <li><a>Pakistan</a></li>
          </ul>
        </details>
      </li>
      <li><a>Fixture</a></li>
      <li><a>Schedules</a></li>
    </ul>
  </div>
  <div className="navbar-end flex gap-1">
    <span>
      0
    </span>
    <span>Coin</span>
    <img className='w-4 h-4' src={dollarImg} alt="" />
  </div>
    </nav>
    </section>
  );
};

export default Navbar;