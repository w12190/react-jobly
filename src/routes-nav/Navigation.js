import React, { useContext } from "react";
import { NavLink } from 'react-router-dom'
import './Navigation.css'
import UserContext from '../userContext'
import JoblyApi from "../api/api";

/** Displays a navigation bar.
 * 
 * Props
 * - handleLogout: function passed from App to log user out
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function Navigation({ handleLogout }) {
  const token = useContext(UserContext);
  console.log("Confirm JoblyApi token", JoblyApi.token)
  console.log("Token called by <Navigation />", token)
 //TODO implement logout 
 //TODO: implement users
  return (
    <nav className="Navigation navbar navbar-expand-lg bg-primary">
        <NavLink exact to="/"> Jobly </NavLink>
        <NavLink exact to="/companies"> Companies </NavLink>
        <NavLink exact to="/jobs"> Jobs </NavLink>
        <NavLink exact to="/Profile"> Profile </NavLink>

        <NavLink exact to="/login"> Login </NavLink>
        <NavLink exact to="/signup"> Signup </NavLink>
        <NavLink exact to="/" onClick={handleLogout}> Logout FIXME</NavLink>
      </nav>
  )
}

export default Navigation