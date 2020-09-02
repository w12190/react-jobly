import React from 'react'
import {Link} from 'react-router-dom'
import './CompanyCard.css'


/** Display simple info about a company
 * 
 * props:
 * - companyData: {name, description, logoUrl}
 *
 * Design: www.tinyurl.com/y3ree3wj
 */

function CompanyCard(props) {
  const { name, handle, logoURL, description } = props.data;

  // TODO: implement logos
  // const hasLogo = logoURL ? <img src={logoURL} alt={name} /> : null;

  return (
    <div className="CompanyCard">
      <Link to={handle}>
        <h2>{name}</h2>
        {/* {hasLogo} */}
        <img src={logoURL} alt={name} />
        <p>{description}</p>
      </Link>

    </div>
  )
}

export default CompanyCard