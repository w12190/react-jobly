import React from 'react'
import './JobCard.css'

/** Display simple info about a job
 * 
 * Props
 * - jobData: includes details about a job - title, companyName, salary, equity
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function JobCard(props) {
  const {  title, companyName, salary, equity } = props.jobData;

  return (
    <div className="JobCard">
      <div>
        <h2>{title}</h2>
        <p>{companyName !== undefined ? companyName : null}</p>
        <p>Salary: {salary}</p>
        <p>Equity: {equity}</p>

        <br />
      </div>
    </div>
  )
}

export default JobCard