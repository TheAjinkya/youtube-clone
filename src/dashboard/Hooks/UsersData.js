import React, { useContext } from 'react'
import { UserContext } from './CompOne'

const UsersData = ()=> {

  const user = useContext(UserContext)
  console.log(user)

  return (
    <div>UsersData: {user}</div>
  )
}

export default UsersData