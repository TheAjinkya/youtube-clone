import React, { useEffect, useState } from 'react'

const FormComp = ()=> {

    const [fullName, setFullName] = useState({ firstName: 'Ajinkya', lastName: 'Chanshetty' })

    const changeFullName = (param) => {
        console.log("param", param)
        setFullName({...fullName, firstName: param, lastName: 'RC'})
    }


    return (
        <div>
            fullName : {fullName.firstName} {fullName.lastName}
            <form>
                firstName: <input type='text' 
                 onChange={(e) => { changeFullName(e.target.value) }} />
            <br/>
            lastName: <input type='text' 
                 onChange={(e) => { changeFullName(e.target.value) }} />
            </form>

        </div>
    )
}

export default FormComp