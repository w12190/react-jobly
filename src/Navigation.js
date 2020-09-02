import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

/** Displays a navigation bar.
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function Navigation() {

  return (
      <nav className="Navigation">
        <NavLink exact to="/"> Jobly </NavLink>
        <NavLink exact to="/companies"> Companies </NavLink>
        <NavLink exact to="/jobs"> Jobs </NavLink>
        <NavLink exact to="/Profile"> Profile </NavLink>

        <NavLink exact to="/login"> Login </NavLink>
        <NavLink exact to="/signup"> Signup </NavLink>
        <NavLink exact to="/"> Logout </NavLink>
      </nav>
  )//TODO implement logout
}

export default Navigation