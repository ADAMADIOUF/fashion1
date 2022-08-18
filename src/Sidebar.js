import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';
export default function Sidebar() {
 const {showNav,closeNav} = useGlobalContext()
  return (
    <aside className={`${showNav ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div>
        <button className='btn-close' onClick={closeNav}>
          <FaTimes />
        </button>
        <ul className='nav-sidebar'>
          <li>
            <a href='/'>home</a>
          </li>
          <li>
            <a href='/boutique'>boutique</a>
          </li>
          <li>
            <a href='/contact'>contact</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
