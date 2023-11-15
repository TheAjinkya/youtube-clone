import React, { createContext, useEffect, useState } from 'react'
import FormComp from './FormComp'
import HookInterval from './HookInterval'
import UsersData from './UsersData'

export const userContext = createContext()

const CompOne = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("Ajinkya")
    const [fullName, setFullName] = useState({firstName:'Ajinkya', lastName:'Chanshetty'})
    const [employees, setEmployees] = useState(['Aji','john', 'Paul', 'Geny']);


    const increment = () => {
        for (let i = 0; i < 10; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    useEffect(()=>{
        document.title = `You clicked ${count} times`
    }, [count])

    const changeName = ()=>{
        setFullName(prevData=>({...prevData, lastName: 'Updated'}))
        setEmployees([...employees, 'New added'])
    }

    return (
        <div>
            CompOne: {count} <br />
            <button onClick={() => increment()}>Change it</button> <br/>
            fullName: {fullName.firstName} {fullName.lastName} <br />
            <button onClick={() => changeName()}>changeName</button>
            <br/>
            {employees.map(res=>res)}
            <hr/>
            <FormComp/>
            <hr/>
            <HookInterval/>
            <hr/>
            <userContext.Provider userName={"AJinkya"}>
            <UsersData/>
            </userContext.Provider>
        </div>
    )
}

export default CompOne
