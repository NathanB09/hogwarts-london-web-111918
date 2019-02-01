import React, { Component } from 'react'

class Hog extends Component {

  state = {
    hidden: false
  }

  render() {
    const hogImg = this.props.hog.name.toLowerCase().split(' ').join('-');
    return (
      <div onClick={() => this.setState({ hidden: !this.state.hidden })} className="column">
        <div className="ui fluid card">
          <div className="image">
            <img src={require(`../hog-imgs/${hogImg}.jpg`)} alt="hog" />
          </div>
          <div className="content">
            <div className="header">{this.props.hog.name}</div>
            {this.state.hidden &&
              <div>
                <div className="meta">{this.props.hog.specialty}</div>
                <div className="description">
                  <i className="trophy icon"></i>{this.props.hog['highest medal achieved']}<br></br>
                  {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                  <br></br>
                  {this.props.hog.greased ? 'Greased' : 'Not Greased'}
                </div>
              </div>
            }
          </div>

        </div>
      </div>
    )
  }
}

export default Hog