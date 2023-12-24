import React, { useContext } from 'react'
import { AuthContext } from '../App'
import { Navigate } from 'react-router-dom'

function PrivateRoute({component:Component, name}) {
    const { auth } = useContext(AuthContext)

    if (auth.is_loggedin){
        return (
            <><Component/></>
        )
    }
    else {
        return (<Navigate to={`/login?redirect=${name}`}/>)
    }
}

export default PrivateRoute