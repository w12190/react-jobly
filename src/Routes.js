import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Homepage from './Homepage'
import CompanyList from './CompanyList'
import JobList from './JobList'
import CompanyDetails from './CompanyDetails'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import ProfileForm from './ProfileForm'

/** Maps URL's to components.
 * 
 * Design: www.tinyurl.com/y3ree3wj
 */
function Routes(){
  return (
    <div className="Routes">
        <Switch>
          <Route exact path to="/">
            <Homepage />
          </Route>

          <Route exact path="/companies/:name">
            <CompanyDetails />
          </Route>

          <Route exact path="/companies">
            <CompanyList />
          </Route>

          <Route exact path="/jobs">
            <JobList />
          </Route>

          <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route exact path="/signup">
            <SignupForm />
          </Route>

          <Route exact path="/profile">
            <ProfileForm />
          </Route>
        </Switch>
    </div>
  )
}

export default Routes