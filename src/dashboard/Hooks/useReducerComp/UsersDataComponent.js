import axios from 'axios';
import React, { useEffect, useReducer } from 'react'

function UsersDataComponent() {

    const reducer = (state, action) => {
        switch (action.type) {
            case "get":
                return { ...state, posts: action.payload }
            default:
                break;
        }
    }

    const initialValue = {
        posts: {},
        loading: true,
        error: ''
    }

    const [users, dispatch] = useReducer(reducer, initialValue)

    const getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then(res => {
            console.log("response", res.data)
            dispatch({ type: 'get', payload: res.data })
        })
    }

    // console.log("Posts", users.posts)

    return (<div>
        UsersDataComp: <br />
       List: {users?.posts?.title} <br/>
        <button onClick={() => { getUsers() }}> Get Data</button>
    </div>)
}

export default UsersDataComponent