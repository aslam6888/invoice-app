import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../App'


function Dashboard() {
  const { auth, test } = useContext(AuthContext)
  return (
    <div><Button>{test}</Button></div>
  )
}



export default Dashboard