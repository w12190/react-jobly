import React, { useState, useEffect } from 'react'
import JobCardList from './JobCardList'
import SearchForm from './SearchForm'
import JoblyApi from './api'


// TODO: codereview PAUSED; 
/** Displays a search form and a list of jobs.
 * 
 * State
 * - jobList: an array of POJO's containing job data [{}, {}, ...]
 * - searchQuery: a string to filter api call with 
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function JobList() {
  const [jobList, setJobList] = useState([])
  const [searchQuery, setSearchQuery] = useState([])
// TODO: see CompanyDetails for isLoaded state/logic

  // Fetches all jobs for JobList
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

  // TODO: consider making this a hook
  useEffect(
    function handleFilteredApiRequests() {
      async function fetchFilteredData(query) {
        // console.log("fetchFilteredData() for <CompanyList /> with query:", query)
        try {
          if (searchQuery.length > 0) {
            const jobs = await JoblyApi.getFilteredJobs(query);
            setJobList(jobs)
          }
        } catch (err) {
          alert(err);
        }
      }
      fetchFilteredData(searchQuery)
    }, [searchQuery]
  )

  return (
    <div className="JobList">
      <SearchForm setSearchQuery={setSearchQuery}/>
      <JobCardList jobList={jobList}/>
    </div>
  )
}

export default JobList