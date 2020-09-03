import React, { useContext } from "react";
import './JobCard.css'
import '../bootstrap.css';
import UserContext from '../userContext'


/** Display simple info about a job
 * 
 * Props
 * - jobData: includes details about a job - title, companyName, salary, equity
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function JobCard({jobData}) {
  const token = useContext(UserContext);
  console.log("Token called by <JobCard />", token)

  const { title, companyName, salary, equity } = jobData;

  return (
    <div className="JobCard card">
      <div>
        <h2>{title}</h2>
        <p>{companyName !== undefined ? companyName : null}</p>
        <p>Salary: {salary}</p>
        <p>Equity: {equity}</p>
        <br />
        <button style={{backgroundColor: "red"}}>Apply</button>
      </div>
    </div>
  )
}

export default JobCard