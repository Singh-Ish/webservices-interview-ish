import React from 'react'
import ItemTags from '../Tags/ItemTags'

function ShowStats(props) {
  const { item, setTagList, tagList, data, index } = props

  return (
    <>
      <div>
        <h3>Powers</h3>
        <div>Intelligence: {item.powerstats.intelligence} </div>
        <div>strength: {item.powerstats.strength} </div>
        <div>speed: {item.powerstats.speed} </div>
        <div>durability: {item.powerstats.durability} </div>
        <div>power: {item.powerstats.power} </div>
        <div>combat: {item.powerstats.combat} </div>

        <ItemTags
          item={item}
          setTagList={setTagList}
          tagList={tagList}
          data={data}
          index={index}
        />
      </div>
    </>
  )
}

export default ShowStats
