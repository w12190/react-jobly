import React from 'react'
import JobCard from './JobCard'

/** Displays a list of jobs.
 * 
 * Props
 * - jobList: an array of POJO's containing job data [{},{},...]
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

 // TODO: remove default after adding isLoaded logic to JobList
 function JobCardList({ jobList = [] }){
  console.log("jobList", jobList)

  //Q: may have extra data in jobData, restructure if needed otherwise ignore
  return (
    <div className="JobCardList">
      {jobList.map(job => {return <JobCard jobData={job} key={job.id}/>})}
    </div>
  )
 }

 export default JobCardList