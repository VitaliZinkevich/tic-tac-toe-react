import React, { Component } from 'react';
import Board from './Board'

class Game extends Component {

  state = {fields: this.props.field, isXturn: true, gotWinner: false, history: []}

  restart = ()=>

  this.setState ({gotWinner: false, fields: this.props.field })



  handleMove = (index)=>{
  let newField = [...this.state.fields]

    if ((this.state.fields[index] === null)) {
      newField [index] = (this.state.isXturn === true) ? 'X' : 'O'

      let check = checkWinner (newField)
      console.log (check)
      this.setState ({fields: newField, isXturn:  !this.state.isXturn, gotWinner:check })





    } else {
      alert ('поле занято')
    }

  }

  render() {
    return (
      <div className='container'>

      <h1>Tic-Tac-Toe</h1>
      {(this.state.gotWinner == false) ? (<h2>{(this.state.isXturn === true) ? 'ход Х' : 'ход O'}</h2>) : null}
      <h3>{(this.state.gotWinner == true) ? (this.state.isXturn === true) ? 'Победа О' : 'Победа Х' : null}</h3>
      {(this.state.gotWinner == true) ? <button onClick={this.restart}>re</button>: null}
      <Board
      field={this.state.fields}
      handleMove={this.handleMove}
      turn={this.state.isXturn}
      gotWinner={this.state.gotWinner}
      />
      </div>

    );
  }
}

function checkWinner (gameField) {

console.log (gameField)

let lines = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[6,4,2]
]

let gotwinner= false;

lines.forEach ((el, ind)=>{

let [a,b,c] = el

if ((gameField[a] !=null) && (gameField[b] !=null)&& (gameField[c] !=null)) {
  if ((gameField[a] === gameField[b])&& (gameField[b]=== gameField[c])) {
    gotwinner = true
  } else {
  }
} else {
}



})

console.log (gotwinner)
return gotwinner

}

export default Game;