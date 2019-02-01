import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList';
import Filter from './Filter'
import Sort from './Sort';

class App extends Component {
  state = {
    hogs: [],
    filterGreased: true
  }

  componentDidMount() {
    this.setState({ hogs: hogs })
  }

  handleToggleInfo = () => {
    this.setState({ toggleInfo: !this.state.toggleInfo })
  }

  displayGreased = () => {
    this.setState({ filterGreased: !this.state.filterGreased })
    if (this.state.filterGreased) {
      this.setState({
        hogs: hogs.filter(hog => hog.greased)
      })
    } else {
      this.setState({ hogs: hogs })
    }
  }

  handleSortName = () => {
    this.setState({
      hogs: this.state.hogs
        .sort(function (a, b) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
        })
    })
  }

  handleSortWeight = () => {
    this.setState({
      hogs: this.state.hogs
        .sort(function (a, b) {
          return a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
        })
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div className="ui segment">
          <div className="ui center aligned grid">
            <div className="center aligned two column row">
              <Filter displayGreased={this.displayGreased} />
              <Sort onSortName={this.handleSortName} onSortWeight={this.handleSortWeight} />
            </div>
          </div>
        </div>
        <HogList hogs={this.state.hogs} displayGreased={this.displayGreased} toggleInfo={this.handleToggleInfo} />
      </div>
    )
  }
}

export default App;
