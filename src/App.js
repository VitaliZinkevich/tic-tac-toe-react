import React, { Component } from 'react';
import Game from './components/Game'



class App extends Component {
  render() {
    let field = ['','','','','','','','',''].fill(null) // enters data

    return (
      <div className="App">
      <Game
      field={field}
      />
    
      </div>
    );
  }
}

export default App;
