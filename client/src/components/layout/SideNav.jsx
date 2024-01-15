import { Avatar, Box, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { PiChartBarLight, PiReceiptLight, PiGearLight, PiWarehouseLight } from "react-icons/pi";
import { NavLink } from 'react-router-dom';

function SideNav() {
  var routes = [
    { path: '/', name: 'Dashboard', icon: <PiChartBarLight size={30} stroke={1}/> },
    { path: '/invoices', name: 'Invoices', icon: <PiReceiptLight size={30} /> },
    { path: '/inventory', name: 'Inventory', icon: <PiWarehouseLight size={30} /> },
    { path: '/settings', name: 'Setting', icon: <PiGearLight size={30} /> },
  ]
  return (
    <Box minH={'100vh'} bg={'gray.800'} w={'70px'} alignItems={'center'} position={'fixed'}>
      <Box display={'flex'} flexDir={'column'} justifyContent={'space-between'} alignItems={'center'} h={'100vh'} py={4}>
        <Box>
          <img src="https://www.freeiconspng.com/thumbs/point-of-sale-icon/point-of-sale-icon-7.png" alt='Logo' width={'50px'} />
          <Box color={'white'} mt={10}>
            <ul>
              {routes.map((val, index) => {
                return (
                  <Box display={'flex'} justifyContent={'center'} >
                    <NavLink to={val.path}>
                      <Tooltip label={val.name} placement='right' hasArrow ml={2}><Box p={3}>{val.icon}</Box></Tooltip>
                    </NavLink>
                  </Box>
                )
              })}
            </ul>
          </Box>
        </Box>


        <Box>
          <Avatar size={'sm'} name='Mohamed Aslam'></Avatar>
        </Box>
      </Box>
    </Box>
  )
}

export default SideNav