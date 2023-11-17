import React, { useState } from 'react'
import useCounter from './useCounter'

function SecondCounter() {

    const [count, increment, decrement, reset] = useCounter(1, 20)

    return (
        <div>
            SecondCounter: {count}
            <br />
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
            <button onClick={() => reset()}>reset</button>
        </div>
    )
}

export default SecondCounter