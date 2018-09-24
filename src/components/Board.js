import React, { Component } from 'react';
import Squere from './Squere'
import './Board.css'

class Board extends Component {
  render() {

    let gameBoard = [...this.props.field].map ((el,ind) =>{
      return (

        <div 
        className={ (ind % 3 == 0 ) ? 'newline' : 'reg' } 
        key={ind}>
        
        <Squere

        el={el}
        index={ind}
        handleMove={this.props.handleMove}
        gotWinner={this.props.gotWinner}

        />
         </div>
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
