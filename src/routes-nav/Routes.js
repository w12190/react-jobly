import React, { useState, useEffect } from 'react'//TODO: clean up
import { Switch, Route } from 'react-router-dom'
import Homepage from '../homepage/Homepage'
import CompanyList from '../companies/CompanyList'
import JobList from '../jobs/JobList'
import CompanyDetails from '../companies/CompanyDetails'
import SignupForm from '../auth/SignupForm'
import LoginForm from '../auth/LoginForm'
import ProfileForm from '../profiles/ProfileForm'

/** Maps URL's to components.
 * 
 * Props
 * - handleLogin: function passed from App to handle user login
 * - handleSignup: function passed from App to handle user signup
 * 
 * State
 * - companyList: array of POJO's containing data on all companies in DB
 * - jobList: array of POJO's containing data on all jobs in DB
 * - searchQuery: search string from SearchForm
 * 
 * Design
 * - www.tinyurl.com/y3ree3wj
 */
function Routes({handleLogin, handleSignup}) {

  //TODO: move CSS ( col-10 mx-auto text-center)
  return (
    <div className="Routes" >

      <Switch>
        <Route exact path="/">
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
          <LoginForm handleLogin={handleLogin}/>
        </Route>

        <Route exact path="/signup">
          <SignupForm handleSignup={handleSignup}/>
        </Route>

        <Route exact path="/profile">
          <ProfileForm />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes