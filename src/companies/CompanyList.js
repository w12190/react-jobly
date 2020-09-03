import React, { useState, useEffect } from 'react'
import SearchForm from '../common/SearchForm';
import CompanyCard from './CompanyCard'
import './CompanyList.css'
import JobCardList from '../common/JobCardList';
import JoblyApi from '../api/api.js'



/** Displays a list of companies.
 *
 * State
 * - companyList: [{}, {}, ...]
 * - searchQuery: a string to filter api call with

 * 
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function CompanyList() {
  console.log("<CompanyList />")
  const [companyList, setCompanyList] = useState([])
  // console.log("companyList", companyList);
  const [searchQuery, setSearchQuery] = useState([])
  console.log("searchQuery", searchQuery);

  useEffect(
    function handleApiRequests() {
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
    }, []
  )

  // TODO: consider making this a hook
  useEffect(
    function handleFilteredApiRequests() {
      async function fetchFilteredData(query) {
        // console.log("fetchFilteredData() for <CompanyList /> with query:", query)
        try {
          if (searchQuery.length > 0) {
            const companies = await JoblyApi.getFilteredCompanies(query);
            setCompanyList(companies)
          }
        } catch (err) {
          alert(err);
        }
      }
      fetchFilteredData(searchQuery)
    }, [searchQuery]
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
  // console.log("companyList mapped for simple info", cardsInfo);

  return (
    <div className="CompanyList">
      <SearchForm setSearchQuery={setSearchQuery}/>
      {cardsInfo.map(c => {
        return <CompanyCard companyData={c} key={c.handle} />
      })}
    </div>
  )
}

export default CompanyList