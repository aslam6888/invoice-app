import React, {useState} from 'react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { PiBellLight } from "react-icons/pi";
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [time,setTime] = useState(new Date().toLocaleTimeString())
  setInterval(() => setTime(new Date().toLocaleTimeString()),1000);

  console.log("Location : ", location.pathname)
  // List of routes where the header should be hidden
  const routesWithoutHeader = ['/pos'];

  // Check if the current route is in the list
  const shouldHideHeader = routesWithoutHeader.includes(location.pathname);

  return shouldHideHeader ? null : (
    <Box h={'70px'} shadow={'sm'}  px={10} bgColor={'white'} borderBottom={'1px solid'} borderColor={'gray.200'}>
      <Box display={'flex'} justifyContent={'end'} alignItems={'center'} h={'100%'}>
        {/* <Box><Text fontSize={13}>{new Date().toDateString()}</Text><Text fontSize={20} fontWeight={600}>{time}</Text></Box> */}
        <Flex gap={5}>
          <Button variant='outline' colorScheme='orange'>Create</Button>
          <Button variant='outline' colorScheme='black'><PiBellLight /></Button>
        </Flex>

      </Box>
    </Box>
  )
}

export default Header