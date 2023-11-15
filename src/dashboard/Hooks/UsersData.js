import React, { useContext } from 'react'
import { userContext } from './CompOne'

const UsersData = ()=> {

  return (
    <div>UsersData: 
      <userContext.Consumer>
        {
          userName =>{
            
          }
        }
      </userContext.Consumer>
    </div>
  )
}

export default UsersData