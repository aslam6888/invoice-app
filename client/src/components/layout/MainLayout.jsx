import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import SideNav from './SideNav'
import Header from './Header'


function MainLayout() {
    return (
        <div>
            <SideNav />
            <Box ml={'70px'} height={'100vh'} display={'flex'} flexDir={'column'}>
                <Header/>
                <Box p={5}  h={'100%'}>
                    <Outlet />
                </Box>
            </Box>
        </div>
    )
}

export default MainLayout