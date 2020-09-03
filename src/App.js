import React, {useState} from 'react';
import Routes from './routes-nav/Routes'
import Navigation from './routes-nav/Navigation'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './userContext'
import JoblyApi from './api/api'
/** App
 * 
 * Design
 * - www.tinyurl.com/y3ree3wj
 */
function App() {
  // this state will be global; used in userContext
  const [token, setToken] = useState(JoblyApi.token);
  const [currentUser, setCurrentUser] = useState([])
  // console.log("token: ", token)
  // token?

  async function handleLogin (data) {
    await JoblyApi.loginUser(data);
    setToken(JoblyApi.token);
    // localstorage
  }
  async function handleSignup (data) {
    await JoblyApi.registerUser(data);
    setToken(JoblyApi.token);
    console.log("JoblyApi.token", JoblyApi.token)
    // localstorage
  }
  function handleLogout () {
    JoblyApi.logoutUser();
    setToken(JoblyApi.token);
  }

  return (
    <div className="App">
      <UserContext.Provider value={token}>
        <BrowserRouter>
          <Navigation handleLogout={handleLogout}/>
          <Routes handleLogin={handleLogin} handleSignup={handleSignup}/>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  )
}

export default App;
