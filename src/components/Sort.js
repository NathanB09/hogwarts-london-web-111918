import React, { Component } from 'react'

class Sort extends Component {
  render() {
    return (
      <div className="column">
        {/* <div className="ui segment"> */}
        <div className="ui buttons">
          <button className="ui pink button" onClick={this.props.onSortName}>Sort by Name</button>
          <div className="or"></div>
          <button className="ui pink button" onClick={this.props.onSortWeight}>Discriminate by Weight</button>
        </div>
      </div>
      // </div>
    )
  }
}

export default Sort