import React from 'react'

/** Displays a simple search box.
 * 
 * Props
 * - setSearchQuery(): sets searchQuery state in <Routes>
 *
 * Design
 * - www.tinyurl.com/y3ree3wj
 */
function SearchForm({ setSearchQuery }) {

  // function onChange() {
    
  // }

  return (
    <div className="SearchForm">
      <form>
        <label for="search-box"  />
        <input type="text" id="search-box" name=""/>
      </form>
    </div>
  )
}

export default SearchForm