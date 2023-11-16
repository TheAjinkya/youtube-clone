import React, { useContext } from 'react'
import { CounterContext } from './Counter'

function CounterTwo() {

    const counterContextTwo = useContext(CounterContext)

    return (<div>Counter2:  <br />
        <button onClick={() => { counterContextTwo.countDispatch({ type: "increment", payload: 1 }) }}>increment by 1</button>
        <button onClick={() => { counterContextTwo.countDispatch({ type: "decrement", payload: 10 }) }}>decrement by 10</button>
        <button onClick={() => { counterContextTwo.countDispatch({ type: "reset", payload: 0 }) }}>reset</button>
    </div>)
}

export default CounterTwo