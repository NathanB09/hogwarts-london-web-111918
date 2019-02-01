import React, { Component } from 'react'

class Filter extends Component {
  render() {
    return (
      <div className="column">
        {/* <div className="ui segment"> */}
        <div className="ui toggle checkbox">
          <input onChange={this.props.displayGreased} type="checkbox" />
          <label>Toggle Greased</label>
        </div>
        {/* </div> */}
      </div>
    )
  }
}

export default Filter