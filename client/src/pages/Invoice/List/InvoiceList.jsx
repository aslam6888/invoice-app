import { Heading, Text, Box } from '@chakra-ui/react';
import React from 'react'
import DataTable from 'react-data-table-component';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Button,
    Badge,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { PiArrowRightThin } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';

const columns = [
    {
        name: 'Invoice Id',
        selector: row => row.id,
    },
    {
        name: 'Customer Name',
        selector: row => row.name,
    },
    {
        name: 'Date',
        selector: row => row.date,
    },
    {
        name: 'Status',
        selector: row => <Badge variant='subtle' colorScheme='green' px={2} py={1} borderRadius={4}>{row.status}</Badge>,
    },
    {
        name: 'Amount',
        selector: row => <Box>${row.price}</Box>,
    },
    {
        name: 'Action',
        selector: (row) => {
            return (
                <Box >
                    <Menu >
                        <MenuButton as={Button} >
                            Actions
                        </MenuButton>
                        <MenuList zIndex={"100000"}>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            )
        }
    },
];

const data = [
    {
        id: 1,
        name: 'Beetlejuice',
        code: '1988',
        stock: 40,
        price: 34000,
        date: new Date().toLocaleDateString(),
        status: 'Paid'
    },
    {
        id: 2,
        name: 'Ghostbusters',
        code: '1984',
        stock: 24,
        price: 3000,
        date: new Date().toLocaleDateString(),
        status: 'Paid'
    },
]

function InvoiceList() {
    var navigate = useNavigate()
    return (
        <div>
            <Breadcrumb spacing='8px' separator={<PiArrowRightThin color='gray.500' />}>
                <BreadcrumbItem>
                    <Link to='/'>Home</Link>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href='#'>Invoices</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Heading size='lg' fontWeight={500} mt={3}>Invoices</Heading>
                <Button colorScheme='blue' onClick={() => navigate('/invoice/create')}>+ Create Invoice</Button>
            </Box>
            {/* <Text size={'sm'} color={'gray'}>List of your invoices</Text> */}
            <Box mt={3} position="relative">
                <DataTable
                    columns={columns}
                    data={data}
                    selectableRows
                    pagination
                    highlightOnHover
                    striped
                />
            </Box>

        </div>
    )
}

export default InvoiceList