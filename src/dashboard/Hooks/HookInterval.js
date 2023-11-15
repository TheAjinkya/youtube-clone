import React, { useEffect, useState } from 'react'

const HookInterval = () => {

    const [counter, setCount] = useState(0)

    const tick = () => {
        setCount(counter + 1)
        console.log("Tick Called")
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        console.log("Called")
        return () => {
            console.log("finsh Called")
            clearInterval(interval)
        }
    }, [])


    return (
        <div>HookInterval: {counter}</div>
    )
}

export default HookInterval