import React from 'react'

const Filter = (props) => {
  return (
    <div className="column">
      {/* <div className="ui segment"> */}
      <div className="ui toggle checkbox">
        <input onChange={props.displayGreased} type="checkbox" />
        <label>Toggle Greased</label>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Filter