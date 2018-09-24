import React, { Component } from 'react';
//import './Squere.css'

class Squere extends Component {
  render() {

    return (
      
      <button
      className='py-3 px-3'
      onClick={ this.props.gotWinner == false ? (()=>{this.props.handleMove(this.props.index)}) : null}>
      {(this.props.el === null) ? "" : this.props.el}
      </button>
      
    );
  }
}

export default Squere;
