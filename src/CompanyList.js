import React, {useState, useEffect} from 'react'

import JoblyApi from './api';
import SearchForm from './SearchForm';
import CompanyCard from './CompanyCard'

/** Displays a list of companies.
 *
 * Design: www.tinyurl.com/y3ree3wj
 */

 function CompanyList(){
  console.log("<CompanyList />")
  const [companyList, setCompanyList] = useState([])
  console.log("companyList", companyList);

  useEffect(
    function handleApiRequests(){
      async function fetchData() {
        console.log("fetchData() for <CompanyList />")
        try {
          const companies = await JoblyApi.getAllCompanies();
          // setCompanyList((oldCompanyList) => [...oldCompanyList, companies]);
          setCompanyList(companies);
        } catch (err) {
          alert(err);
        }
      }
      fetchData()
    },[]
   )
  // TODO: add state holding searchterm to useEffect dependencies
  // TODO: add <SearchForm />

   const cardsInfo = companyList.map(c => {
      return {
        handle: c.handle,
        name: c.name,
        description: c.description,
        logoUrl: c.logoUrl
      }
   }) 
   console.log("companyList mapped for simple info", cardsInfo);

  return (
    <div>
      <SearchForm />
      {cardsInfo.map(c=> {
        return <CompanyCard data={c}/>
        })}
    </div>
  )
 }

 export default CompanyList