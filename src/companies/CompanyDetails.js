import React, { useState, useEffect } from 'react'
import JobCardList from '../common/JobCardList'
import { useParams } from 'react-router-dom'
import JoblyApi from '../api/api'


/** Displays company details.
 * 
 * State
 * jobListForCompany: holds list of jobs for company [{},{},...]
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function CompanyDetails() {
  console.log("<CompanyDetails />")

  const { name } = useParams()
  console.log("name", name)
  const [companyDetails, setCompanyDetails] = useState([]);
  // console.log("companyDetails", companyDetails )
  const [isLoaded, setIsLoaded ] = useState(false);

  //TODO: don't play state elevator

  //  Fetches all jobs for companyToGetJobsFor
  useEffect(
    function handleApiRequests() {
      async function fetchData() {
        console.log("fetchData() for <CompanyDetail />")
        try {
          const company = await JoblyApi.getDetailsForCompany(name);
          setIsLoaded(true);
          setCompanyDetails(company);
        } catch (err) {
          alert(err);
        }
      }
      if  (!isLoaded) {
        fetchData()
      }
    }, [name, isLoaded] // always runs the first time, no matter dependencies
  )

  // TODO: do not render jobCardList if data is not loaded
  // Adding loading message

  if (!isLoaded) {
    return "Loading...";
  } 
  return (
    <div className="CompanyDetails">
      <h1>{companyDetails.name}</h1>
      <p> {companyDetails.description}</p>
      <JobCardList jobList={companyDetails.jobs} />
    </div>
  )
}

export default CompanyDetails