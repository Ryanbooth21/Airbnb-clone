import React, { Component } from 'react';
import { helpData } from './helpData';
import './helpbar.css';

export default class Helpbar extends Component {
  render() {
    const { loggedIn, username } = this.props
    const promptText = loggedIn ? `What can we help you find ${username}?` : 'Explore Airbnb';
    
    const helpItems = helpData.map((item) => {
      return (
        <div className="helpItemBox">
          <div className="cardImg" style={{backgroundImage: `url(${item.imgUrl})`}}></div>
          <div className="cardname">
            <h2>{item.cardName}</h2>
          </div>
        </div>
      ) 
    });

    return (
        <div className="helpbarContainer">
          <div className="helpbar">
            <h1>{promptText}</h1>
            <div className="boxList">
              {helpItems}
            </div>
          </div>
        </div>
    )
  }
}
