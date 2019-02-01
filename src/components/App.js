import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogList from './HogList';

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
          if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return -1;
          if (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) return 1;
          return 0;
        })
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <HogList hogs={this.state.hogs} displayGreased={this.displayGreased} toggleInfo={this.handleToggleInfo} onSortName={this.handleSortName} onSortWeight={this.handleSortWeight} />
      </div>
    )
  }
}

export default App;
