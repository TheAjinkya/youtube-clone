import React, { useState } from 'react'

function useCounter(initialValue, payload) {

    const [count, setCount] = useState(0)
    const increment = () => setCount(prevCount => prevCount + payload)
    const decrement = () => setCount(prevCount => prevCount - payload)
    const reset = () => setCount(0)
    return [count, increment, decrement, reset]
}

export default useCounter