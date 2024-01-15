import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import SideNav from './SideNav'
import Header from './Header'


function MainLayout() {
    return (
        <Box  backgroundColor={'gray.100'}>
            <SideNav />
            <Box ml={'70px'} height={'100vh'} display={'flex'} flexDir={'column'}>
                <Header/>
                <Box mx={8} my={4} h={'100%'}>
                    <Outlet />
                </Box>
            </Box>
        </Box>
    )
}

export default MainLayout