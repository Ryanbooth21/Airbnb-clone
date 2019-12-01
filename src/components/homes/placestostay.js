import React, { Component } from 'react'
import homesList from './homeslist'
export default class PlacesToStay extends Component {
  render() {

    const places = homesList.map((item)=> {
      <div className="box">

      </div>
    })

    return (
      <div>
        <h4>{homesList.length} places to stay</h4>
        <div className="boxlist">
          {places}
        </div>
      </div>
    )
  }
}
