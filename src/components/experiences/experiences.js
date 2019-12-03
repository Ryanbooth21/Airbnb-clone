import React, { Component } from 'react';
import { experienceList } from './experienceList';
import './experiences.css';

export default class Experience extends Component {
  render() {
    const places = experienceList.map((item)=> {
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
        <h4>Top-rated experiences</h4>
        <div className="boxlist">
          {places}
        </div>
      </div>
    )
  }
}
