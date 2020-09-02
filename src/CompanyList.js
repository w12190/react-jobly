import React from 'react'
import SearchForm from './SearchForm';
import CompanyCard from './CompanyCard'
import './CompanyList.css'
import JobCardList from './JobCardList';


/** Displays a list of companies.
 *
 * Props
 * - companyList
 * - setSearchQuery()
 * 
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function CompanyList({ companyList, setSearchQuery }) {
  console.log("<CompanyList />")
  // const [companyList, setCompanyList] = useState([])
  // console.log("companyList", companyList);


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
    <div className="CompanyList">
      <SearchForm />
      {cardsInfo.map(c => {
        return <CompanyCard companyData={c} key={c.handle} />
      })}
    </div>
  )
}

export default CompanyList