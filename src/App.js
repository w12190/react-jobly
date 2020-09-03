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
  const [token, setToken] = useState(JoblyApi.token);
  const [currentUser, setCurrentUser] = useState([])//TODO: pojo; and null is clearer for no user

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  /** Get information on the newly-logged-in user and store it in the currentUser state */
  useEffect(function setCurrentUserOnLogin() {
      async function setUser() {//TODO: try catch for 'wrong' JWT's
        //Decode JWT to get username in token
        const username = JWT.decode(token).username
        
        //Get user data via API call and username
        const userData = await JoblyApi.getUserData(username)

        //Set current user state
        setCurrentUser(userData)
        setIsLoggedIn(true)
      }
      if (token !== undefined) setUser()
    }, [token]
  )

  /** Handles user login */
  async function handleLogin(data) {
    // API call
    const token = await JoblyApi.loginUser(data);

        // // Set token
        // setToken(JoblyApi.token);
    // Set LocalStorage
    localStorage.setItem("token", token)
  }

  /** Handles user signup */
  async function handleSignup(data) {
    // API call
    await JoblyApi.registerUser(data);

      // // Set token
      // setToken(JoblyApi.token);
    localStorage.setItem("token", token)
  }

  /** Handles user logout */
  function handleLogout() {
    // API call
    // JoblyApi.logoutUser();//TODO: don't want api.js to do any of it, just set to null and let effect handle

    // Reset states
    setIsLoggedIn(false)
    // setToken(JoblyApi.token);
    localStorage.removeItem("token")
  }
//TODO: don't have to use derived state isLoggedIn, just use null for currUser
  return (
    <div className="App">
      <UserContext.Provider value={{currentUser, isLoggedIn}}>
        <BrowserRouter>
          <Navigation handleLogout={handleLogout} />
          <Routes handleLogin={handleLogin} handleSignup={handleSignup} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App;
