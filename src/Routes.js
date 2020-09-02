import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './Homepage'
import CompanyList from './CompanyList'
import JobList from './JobList'
import CompanyDetails from './CompanyDetails'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import ProfileForm from './ProfileForm'
import JoblyApi from './api.js'

/** Maps URL's to components.
 * 
 * State
 * - companyList: array of POJO's containing data on all companies in DB
 * - jobList: array of POJO's containing data on all jobs in DB
 * - searchQuery: search string from SearchForm
 * 
 * Design
 * - www.tinyurl.com/y3ree3wj
 */
function Routes() {

  //All companies from API call
  const [companyList, setCompanyList] = useState([])
  const [companyToGetJobsFor, setCompanyToGetJobsFor] = useState([])
  const [jobList, setJobList] = useState([])

  //used for forms, will be fixed when forms finished
  const [searchQuery, setSearchQuery] = useState([])


  //Fetches all jobs for companyToGetJobsFor
  useEffect(
    function handleApiRequests(){
      async function fetchData() {
        // console.log("fetchData() for <CompanyList />")

        try {
          //Prevent this effect from running when the app is initially loade
          if (Object.keys(companyToGetJobsFor).length !== 0){
            const jobList = await JoblyApi.getAllJobsForCompany()
            setJobList(jobList)
          }
        } catch (err) {
          alert(err);
        }
      }
      fetchData()
    },[companyToGetJobsFor]
   )

  //Fetches all companies for CompanyList
  useEffect(
    function handleApiRequests(){
      async function fetchData() {
        // console.log("fetchData() for <CompanyList />")
        try {
          const companies = await JoblyApi.getAllCompanies()
          setCompanyList(companies)
        } catch (err) {
          alert(err);
        }
      }
      fetchData()
    },[]
   )

  //Fetches all jobs for JobList
  useEffect(
    function handleApiRequests(){
      async function fetchData() {
        // console.log("fetchData() for <JobList />")
        try {
          const jobs = await JoblyApi.getAllJobs()
          setJobList(jobs)
        } catch (err) {
          alert(err);
        }
      }
      fetchData()
    },[]
   )

  return (
    <div className="Routes">
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/companies/:name">
          <CompanyDetails setCompanyToGetJobsFor={setCompanyToGetJobsFor}
                          companyToGetJobsFor={companyToGetJobsFor}
                          jobList={jobList}/>
        </Route>

        <Route exact path="/companies">
          <CompanyList companyList={companyList} setSearchQuery={setSearchQuery}/>
        </Route>

        <Route exact path="/jobs">
          <JobList jobList={jobList} setSearchQuery={setSearchQuery}/>
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