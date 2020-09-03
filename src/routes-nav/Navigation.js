import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import UserContext from '../common/UserContext'

/** Displays a navigation bar.
 * 
 * Props
 * - handleLogout: function passed from App to log user out
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function Navigation({ handleLogout }) {
  // console.log('<Navigation>')
  const { currentUser, isLoggedIn } = useContext(UserContext);
  return (
    <nav className="Navigation navbar navbar-expand-lg bg-primary">
      <NavLink exact to="/"> Jobly </NavLink>

      {isLoggedIn && (
        <>
          <NavLink exact to="/companies"> Companies </NavLink>
          <NavLink exact to="/jobs"> Jobs </NavLink>
          <NavLink exact to="/Profile"> Profile </NavLink>
          <NavLink exact to="/" onClick={handleLogout}> Logout {currentUser.firstName}</NavLink>
        </>
      )}

      {!isLoggedIn && (
        <>
          <NavLink exact to="/login"> Login </NavLink>
          <NavLink exact to="/signup"> Signup </NavLink>
        </>
      )}
    </nav>
  )
}

export default Navigation