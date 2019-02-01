import React from 'react'
import Hog from './Hog'

const HogList = (props) => {
  return (
    <div>
      <div className="ui four column grid link cards">
        {props.hogs.map((hog, idx) => <Hog key={idx} hog={hog} />)}
      </div>
    </div>
  )
}

export default HogList