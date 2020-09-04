import React, { useState, useEffect } from 'react';
import Routes from './routes-nav/Routes'
import Navigation from './routes-nav/Navigation'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './common/UserContext'
import JoblyApi from './api/api'
import JWT from 'jsonwebtoken'

/** App
 * 
 * States
 * - token: set after user login
 * - currentUser: set after token updates
 * 
 * Design
 * - www.tinyurl.com/y3ree3wj
 */
function App() {
  // this state will be global; used in userContext
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState([])//TODO: pojo; and null is clearer for no user

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  /** Get information on the newly-logged-in user and store it in the currentUser state */
  useEffect(function setCurrentUserOnLogin() {
    async function setUser() {
      try {
        console.log("useEffect running with token: ", token)
        if (token) {
          //Decode JWT to get username in token
          const username = JWT.decode(token).username
          JoblyApi.token = token;
          console.log("username", username)

          //Get user data via API call and username
          const userData = await JoblyApi.getUserData(username)
          console.log("userData", userData)
          //Set current user state
          // CONCEPT: hydrating user from localstorage
          setCurrentUser(userData)
          setIsLoggedIn(true)
        }
      } catch (err) {
        // TODO: do something with errors
      }
    }
    console.log("token set by state", token)
    if (token !== undefined) setUser()
  }, [token] // always runs the first time, even if dependency
  )

  /** Handles user login */
  async function handleLogin(data) {
    // API call
    const token = await JoblyApi.loginUser(data);

    // Set token in localStorage

    localStorage.setItem("token", token)
    setToken(localStorage.getItem("token"))
    setIsLoggedIn(true)
  }

  /** Handles user signup */
  async function handleSignup(data) {
    // API call
    const token = await JoblyApi.registerUser(data);

    // Set token
    localStorage.setItem("token", token)
    // TODO: make this a hook
    setToken(localStorage.getItem("token"))
    setIsLoggedIn(true)
  }
  /** Handles profile edits */

  async function handleProfileEdit(username, data) {
    // API call
    const user = await JoblyApi.editUserData(username, data);
    setCurrentUser(user);
  }

  /** Handles user logout */
  function handleLogout() {

    // Reset states
    setIsLoggedIn(false)

    localStorage.removeItem("token")
  }

  // function handleJobApplication() {
  // }



  //TODO: stylistic choice to implement later: don't have to use derived state isLoggedIn, just use null for currUser
  return (
    <div className="App">
      <UserContext.Provider value={{ currentUser, isLoggedIn }}> 
      {/* <UserContext.Provider value={{ currentUser, isLoggedIn: currentUser !== [] }}>  */}
      {/* TODO: clean up, make sure currentuser null */}
      {/* provider components not limited to exposing state, can expose any variable */}
        <BrowserRouter>
          <Navigation handleLogout={handleLogout} />
          <Routes handleLogin={handleLogin} handleSignup={handleSignup} handleProfileEdit={handleProfileEdit} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App;
