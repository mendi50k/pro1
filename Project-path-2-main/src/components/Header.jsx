import React from 'react'
import { NavLink } from 'react-router-dom'
import welfareImage from '../images/welfare.jpg'

function Header() {
  return (
    <div>
        <h1>Welcome to Animal Welfare App</h1>
        <img src={welfareImage} alt="welfare" class="circular-image"/>

        <nav className='whatever'>
            <ul className="menu">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'menu-item active' : 'menu-item')}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header