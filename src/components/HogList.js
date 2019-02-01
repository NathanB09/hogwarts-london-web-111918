import React, { Component } from 'react'
import Hog from './Hog';
import Filter from './Filter'
import Sort from './Sort';

class HogList extends Component {
  render() {
    return (
      <div>
        <div className="ui segment">
          <div className="ui center aligned grid">
            <div className="center aligned two column row">
              <Filter displayGreased={this.props.displayGreased} />
              <Sort onSortName={this.props.onSortName} onSortWeight={this.props.onSortWeight} />
            </div>
          </div>
        </div>
        <div className="ui four column grid link cards">
          {this.props.hogs.map((hog, idx) => <Hog key={idx} hog={hog} />)}
        </div>
      </div>
    )
  }
}

export default HogList