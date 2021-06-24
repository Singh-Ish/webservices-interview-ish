import React, { useEffect, useState } from 'react'
import '../../styles/tags.css'

function TagsFilter(props) {
  const { tag, index, setSelectedTag } = props

  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    isClicked ? setSelectedTag(tag) : setSelectedTag('')
  })

  const ClickedTag = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <span className="tagListItem" key={index} onClick={ClickedTag}>
        {tag}
      </span>
    </>
  )
}

export default TagsFilter
