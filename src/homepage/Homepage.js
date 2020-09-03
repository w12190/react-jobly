import React, { useContext } from 'react'
import UserContext from '../common/UserContext'
import { NavLink } from 'react-router-dom'

/** Displays the homepage.
 * 
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function Homepage() {
  const { isLoggedIn, currentUser } = useContext(UserContext);

  //TODO: move css style={{marginTop: "250px"}}
  return (
    <div className="Homepage">
      <h1>Jobly</h1>
      <p>All the jobs in one convenient place</p>

      {isLoggedIn && (
        <h2>Welcome back, {currentUser.firstName}!</h2>
      )}

      {!isLoggedIn && (
        <>
          <NavLink to="/login" className="btn btn-primary">Log in</NavLink> &nbsp;
          <NavLink to="/signup" className="btn btn-primary">Sign up</NavLink>
        </>
      )}
    </div>
  )
}

export default Homepage