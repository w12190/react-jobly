import React from 'react'
import JobCardList from './JobCardList'
import SearchForm from './SearchForm'


/** Displays a search form and a list of jobs.
 * 
 * Props
 * - jobList: an array of POJO's containing job data
 * - setSearchQuery
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function JobList({ jobList, setSearchQuery }) {
  //Add form to div below after implementing it
  return (
    <div className="JobList">
      <SearchForm setSearchQuery={setSearchQuery}/>
      <JobCardList jobList={jobList}/>
    </div>
  )
}

export default JobList