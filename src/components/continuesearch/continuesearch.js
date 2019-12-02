import React, { Component } from 'react'
import './continuesearch.css';
export default class ContinueSearch extends Component {
  render() {

    const { searchTerms } = this.props;
    const firstTerms = searchTerms.slice(-2, searchTerms.length)
    const recentTerms = firstTerms.map(item => {
      return (
        <div className="searchBox">
          <h3>{item}</h3>
        </div>
      )
    })
    return (
      <div style={{display: (recentTerms.length ? 'flex' : 'none' )}} id="container">
        <div className="search">
          <h1>Recent search terms</h1>
          <div id="recentTerms">
            {recentTerms}
          </div>
        </div>
      </div>
    )
  }
}
