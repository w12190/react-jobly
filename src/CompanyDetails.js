import React from 'react'
import JobCardList from './JobCardList'
import { useParams } from 'react-router-dom'

/** Displays company details.
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function CompanyDetails({ companyToGetJobsFor, setCompanyToGetJobsFor, jobList }) {

  const { handle } = useParams()

  //TODO: don't play state elevator
  setCompanyToGetJobsFor(handle)

  // const jobs
  return (
    <div className="CompanyDetails">
      <JobCardList jobList={jobList} />
    </div>
  )
}

export default CompanyDetails