import React, { useEffect } from 'react'

import SearchResultItem from './SearchResultItem'

function SearchResult(props) {
  const { data, searchText, setTagList, tagList, selectedTag } = props

  // filtering the content based on the search textto be displayed ; this filters by name and fullname
  var filterData = data.filter((item) => {
    if (searchText === '') {
      return item
    } else if (
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.biography.fullName.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return item
    }
  })

  if (selectedTag === '') {
    filterData = data.filter((item) => {
      if (searchText === '') {
        return item
      } else if (
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.biography.fullName.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return item
      }
    })
  } else {
    filterData = data.filter((item) => {
      if (item.itemTags.includes(selectedTag.toLowerCase())) {
        return item
      }
    })
  }

  return (
    <>
      {filterData.map((item, index) => (
        <div key={item.id}>
          <SearchResultItem
            item={item}
            setTagList={setTagList}
            tagList={tagList}
            data={data}
            index={index}
          />
        </div>
      ))}
    </>
  )
}

export default SearchResult
