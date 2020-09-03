import React, { useContext } from "react";
import './JobCard.css'
import UserContext from './UserContext'


/** Display simple info about a job
 * 
 * Props
 * - jobData: includes details about a job - title, companyName, salary, equity
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function JobCard({jobData}) {
  // const token = useContext(UserContext);
  // console.log("Token called by <JobCard />", token)

  const { title, companyName, salary, equity } = jobData;

  return (
    <div className="JobCard card border-secondary mb-3">
      <div>
        <h4>{title}</h4>
        <p>{companyName !== undefined ? companyName : null}</p>
        <p>Salary: {salary}</p>
        <p>Equity: {equity}</p>
        <br />
        <button className="btn btn-danger btn-small">Apply</button>
      </div>
    </div>
  )
}

export default JobCard