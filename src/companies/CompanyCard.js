import React from 'react'
import {Link} from 'react-router-dom'
import './CompanyCard.css'

/** Display simple info about a company
 * 
 * Props:
 * - companyData: {name, handle, description, logoUrl}
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */

function CompanyCard(props) {
  const { name, handle, logoUrl, description } = props.companyData;


  return (
    <div className="CompanyCard">
      <Link to={`/companies/${handle}`}>
        <h2>{name}</h2>
        {logoUrl ? <img src={logoUrl} alt={name} /> : null}
        <p>{description}</p>
        <br />
      </Link>
    </div>
  )
}

export default CompanyCard