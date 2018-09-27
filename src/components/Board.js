import React, { Component } from 'react';
import Squere from './Squere'
import './Board.css'

class Board extends Component {
  render() {

    let gameBoard = [...this.props.field].map ((el,ind) =>{
      return (

        <Squere key={ind}
        el={el}
        index={ind}
        handleMove={this.props.handleMove}
        gotWinner={this.props.gotWinner}
        />

      )
    })

    return (
      <div className=''>

      {gameBoard}

      </div>
    );
  }
}

export default Board;
