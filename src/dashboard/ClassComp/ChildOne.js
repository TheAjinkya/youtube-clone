import React, { Component } from 'react'

export default class ChildOne extends Component {
  
    constructor(props){
        super();
        this.state = {
            name: 'Child One'
        }
    }

    getIncrement(amount){
        this.props.increment(amount)
        console.log("getIncrement")
    }
  
    render() {
    return (
      <div>ChildOne Counter: {this.props.counter}
      <br/>
      <button onClick={()=>this.getIncrement(5)}>Increment by 5</button>
      </div>
    )
  }
}
