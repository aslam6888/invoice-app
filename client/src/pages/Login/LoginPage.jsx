import React, {useState, useContext} from 'react'
import { AuthContext } from '../../App'
import { Button, Input, Box } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function LoginPage() {

  const {auth, login} = useContext(AuthContext) 
  let [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate()

  const login_handler = () => {
    var logged_in = login()

    if (logged_in){
      navigate("/")
    }
  }

  console.log(searchParams)
  return (
    <Box mx={10} minH={'100vh'} display={'flex'} flexDir={'column'} justifyContent={'center'}>
      <Box>
        <Input placeholder='Username' my={2} />
        <Input placeholder='Password' type='password' my={2} />
        <Button my={2} onClick={login_handler}>Submit</Button>
      </Box>

    </Box>
  )
}

export default LoginPage