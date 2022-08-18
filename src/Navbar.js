import React from 'react'
import { useGlobalContext } from './context'
import {FaBars} from "react-icons/fa"
export default function Navbar() {
 const {openNav}= useGlobalContext()
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='/images/logo2.png' alt='' className='img-logo' />

          <button className='btn-toggle' onClick={openNav}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <a href='/'>home</a>
          </li>
          <li>
            <a href='/boutique'>boutique</a>
          </li>
          <li>
            <a href='/tenu'>tenu de travail</a>
          </li>
          <li>
            <a href='/contact'>contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
