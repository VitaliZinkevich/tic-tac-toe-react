import React, { Component } from 'react';


class History extends Component {
  render() {

    let historyList = this.props.hist.map ((el, ind)=>{
      return (
        <button

         key={ind} className='mx-1'>
         {ind+1}
         </button>

      )
    })

    return (
      <div className='my-3'>
     {historyList}
      </div>
    );
  }
}

export default History;
