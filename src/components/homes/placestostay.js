import React, { Component } from 'react';
import { homesList } from './homeslist';
import { showRoom } from '../../redux/redux'; 
import {connect} from 'react-redux';
import './placestostay.css';

class PlacesToStay extends Component {

  handleClick = (id) => {
    this.props.showRoom(id);
    this.props.history.push(`/homes/${id}`);
  }

  render() {
    const places = homesList.map((item)=> {
      return (
        <div onClick={()=> this.handleClick(item.id)} className="box">
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

const actionCreators = {
  showRoom,
};

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps, actionCreators)(PlacesToStay);
