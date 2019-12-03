import React, { Component } from 'react';
import {connect} from 'react-redux';
import { showRoom } from '../../redux/redux'; 
import { homesList } from '../homes/homeslist';
import './singlehome.css';

class SingleHome extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentDidMount() {
    this.props.showRoom(this.props.match.params.id);

  }
  
  render() {

    let home = {
      title: '',
      type: '',
    }
    for (let i=0; i < homesList.length; i++){
      if (homesList[i].id == this.props.id) {
          home = homesList[i]
      };
    };

    console.log(this.props.id, home)
    return (
      <div className="container">
        <div className="homeImg" style={{backgroundImage: `url(${home.img})`}}/>
        <div className="description">
          <h1>{home.title}</h1>
          <p>{home.type}</p>
          <div className="specs">
            <h5>Private room in house</h5>
            <h5>Self check in</h5>
            <h5>Sparkling clean</h5>
            <h5>Charles is a Superhost</h5>
          </div>    
        </div>
        
      </div>
    )
  }
}

const actionCreators = {
  showRoom,
};

const mapStateToProps = (state) => ({
  id: state.roomSearchId,
})

export default connect(mapStateToProps, actionCreators)(SingleHome);