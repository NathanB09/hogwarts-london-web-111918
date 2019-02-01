import React from 'react'

const Sort = (props) => {
  return (
    <div className="column">
      {/* <div className="ui segment"> */}
      <div className="ui buttons">
        <button className="ui pink button" onClick={props.onSortName}>Sort by Name</button>
        <div className="or"></div>
        <button className="ui pink button" onClick={props.onSortWeight}>Discriminate by Weight</button>
      </div>
    </div>
    // </div>
  )
}

export default Sort