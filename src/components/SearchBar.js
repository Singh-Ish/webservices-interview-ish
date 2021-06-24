import React from 'react'

function SearchBar(props) {
  const { setSearchText } = props

  return (
    <>
      <div className="searchBar">
        <input
          id="searchInput"
          type="search"
          placeholder="Search your superhero "
          onChange={(event) => {
            setSearchText(event.target.value)
          }}
        />
        <p className="note">* The search filters by Name, FullName and Tags </p>
      </div>
    </>
  )
}

export default SearchBar
