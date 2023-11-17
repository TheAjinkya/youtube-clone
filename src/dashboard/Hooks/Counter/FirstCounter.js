import React, { useState } from 'react'
import useCounter from './useCounter'

function FirstCounter() {

    const [count, increment, decrement, reset] = useCounter(10, 10)

    return (
        <div>
            FirstCounter: {count}
            <br />
            <button onClick={() => increment()}>increment</button>
            <button onClick={() => decrement()}>decrement</button>
            <button onClick={() => reset()}>reset</button>
        </div>
    )
}

export default FirstCounter