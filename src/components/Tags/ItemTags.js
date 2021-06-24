import React, { useEffect, useState } from 'react'
import '../../styles/tags.css'

function ItemTags(props) {
  const { item, setTagList, tagList, data, index } = props

  const tagInput = React.createRef()
  const [tags, setTags] = useState([])
  const [tagValue, setTagValue] = useState('')

  const onTagInputAreaChange = (e) => {
    setTagValue(e.target.value)
  }

  useEffect(() => {
    // // saving the tag to the respective json data item
    data[index] = { ...data[index], itemTags: tags }
  })

  const addtag = () => {
    setTags([...tags, tagValue])

    //resetting the input value of tag
    tagInput.current.value = ''

    // adding tag list to main tag list to be shown
    setTagList([...tagList, tagValue])
  }

  return (
    <>
      <div>
        <h3> Tags </h3>
        <div className="tagInput">
          <div>
            <input
              id="tagBar"
              type="tag"
              placeholder="Add Tag "
              onChange={(e) => onTagInputAreaChange(e)}
              ref={tagInput}
            />
            <button className="tagButton" onClick={(e) => addtag()}>
              Add Tag
            </button>
          </div>
          <div className="tagRow">
            {tags.map((tag, index) => (
              <span key={index} className="tagItem">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemTags
