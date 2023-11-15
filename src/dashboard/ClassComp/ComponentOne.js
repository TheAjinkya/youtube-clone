import React from "react";
import { Component } from "react";
import ComponentTwo from "./ComponentTwo";
import ChildOne from "./ChildOne";

class ComponentOne extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "Ajinkya",
      lastName: "Chanshetty",
      contact: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      employees: [
        { firstName: "AJinkya", lastName: "Chanshetty 1" },
        { firstName: "AJinkya", lastName: "Chanshetty 2" },
        { firstName: "AJinkya", lastName: "Chanshetty 3" },
      ],
      counter: 10,
    };
  }

  increment = (amount=1)=> {
    console.log("increment");
    // this.setState({ counter: this.state.counter + 1 }, () => {
    //     console.log("Counter", this.state.counter)
    // })
    // this.setState((prevCount) => ({counter : prevCount.counter + 1}),() => {
    //     console.log("Counter", this.state.counter)
    // })

    // this.setState(prevCount => ({counter: prevCount.counter + 1}))

    this.setState(
      (prevCount) => ({ counter: prevCount.counter + amount }),
      () => {
        console.log("prevCount", this.state.counter);
      }
    );
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        {this.state.firstName} <br />
        List :{" "}
        {this.state.employees.map((response) => (
          <>
            {response.lastName}
            <br />
          </>
        ))}
        <hr />
        Counter : {this.state.counter} <br />
        <button onClick={() => this.increment()}>Increment</button>
        <hr/>
        <ComponentTwo firstName={this.state.firstName} lastName={this.state.lastName}/>
        <hr/>
        <ChildOne increment={this.increment} counter={this.state.counter}/>
      </div>
    );
  }
}

export default ComponentOne;
