import React, { useState } from 'react'
import ShowStats from './ShowStats'

function SearchResultItem(props) {
  const { item, setTagList, tagList, data, index } = props
  const [isExpanded, setIsExpanded] = useState(false)
  function handleButtonClick(e) {
    setIsExpanded(!isExpanded)
  }

  return (
    <>
      <div className="searchResult">
        {/* displaying the image the left  */}
        <div className="left">
          <img src={item.images.md} alt="super Hero" />
        </div>

        {/* displaying the content on the right  */}
        <div className="right">
          {/* button for toggling the expansion of the card  */}
          <div className="icon" onClick={handleButtonClick}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
            </svg>
          </div>
          <h1> {item.name} </h1>
          <div className="stats">
            <div>Full Name : {item.biography.fullName} </div>
            <div> Race : {item.appearance.race} </div>
            <div>Alignment: {item.biography.alignment} </div>
            <div>Publisher: {item.biography.publisher} </div>
          </div>

          {/* the expanded content  */}

          {isExpanded && (
            <ShowStats
              item={item}
              setTagList={setTagList}
              tagList={tagList}
              data={data}
              index={index}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default SearchResultItem
