import React, { createContext, useReducer } from 'react'
import CounterTwo from './CounterTwo';
export const CounterContext = createContext()

const Counter = () => {

    const initialValue = { value: 0 };
    const reducer = (state, action) => {

        switch (action.type) {
            case "increment":
                return { value: state.value + action.payload }
            case "decrement":
                return { value: state.value + action.payload }
            case "reset":
                return { value: action.payload }
            default:
                break;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialValue)

    // const [countTwo, dispatch2] = useReducer(reducer, initialValue)

    return (
        <div>Counter: {count.value} <br />
            <button onClick={() => { dispatch({ type: "increment", payload: 1 }) }}>increment by 1</button>
            <button onClick={() => { dispatch({ type: "decrement", payload: 10 }) }}>decrement by 10</button>
            <button onClick={() => { dispatch({ type: "reset", payload: 0 }) }}>reset</button>
            <hr/>
            <CounterContext.Provider value={{countState: count, countDispatch: dispatch}}>
            <CounterTwo/>
            </CounterContext.Provider>
        </div>
    )
}

export default Counter