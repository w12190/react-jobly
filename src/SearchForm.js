import React, {useState} from 'react'
import './bootstrap.css'

/** Displays a simple search box.
 * State
 * -searchQuery: input entered into searchbox
 * 
 * Props
 * - setSearchQuery(): sets searchQuery the parent component (JobList, CompanyList)
 *
 * 
 * Design
 * - www.tinyurl.com/y3ree3wj
 */
function SearchForm({ setSearchQuery }) {
  const [filterQuery, setFilterQuery ] = useState();

  function handleChange(evt) {
    const { value } = evt.target;
    setFilterQuery(q => value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setSearchQuery(filterQuery);
  }

  return (
    <div className="SearchForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchbox"  />
        <input type="text" id="searchbox" name="searchbox" onChange={handleChange}/>
        <button className="btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SearchForm