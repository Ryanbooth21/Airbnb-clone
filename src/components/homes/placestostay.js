import React, { Component } from 'react';
import { homesList } from './homeslist';
import './placestostay.css';

export default class PlacesToStay extends Component {
  render() {
    const places = homesList.map((item)=> {
      return (
        <div className="box">
          <div className="img" style={{backgroundImage: `url(${item.img})`}} />
          <div className="description">
            <h5>{item.title}</h5>
            <p>{item.price}$ a night</p>
          </div>
        </div>
      )
    })

    return (
      <div className="boxContainer">
        <h4>{homesList.length} places to stay</h4>
        <div className="boxlist">
          {places}
        </div>
      </div>
    )
  }
}
