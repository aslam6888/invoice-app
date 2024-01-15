import { Heading, Text, Box } from '@chakra-ui/react';
import React from 'react'
import DataTable from 'react-data-table-component';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { PiArrowRightThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

const columns = [
  {
    name: 'Name',
    selector: row => row.name,
  },
  {
    name: 'Code',
    selector: row => row.code,
  },
  {
    name: 'Stock',
    selector: row => row.stock,
  },
  {
    name: 'Price',
    selector: row => row.price,
  },
];

const data = [
  {
    id: 1,
    name: 'Beetlejuice',
    code: '1988',
    stock:40,
    price: 34000
  },
  {
    id: 2,
    name: 'Ghostbusters',
    code: '1984',
    stock:24,
    price: 3000
  },
]

function Inventory() {
  return (
    <div>
      <Breadcrumb spacing='8px' separator={<PiArrowRightThin color='gray.500' />}>
  <BreadcrumbItem>
    <Link to='/'>Home</Link>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Inventory</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
      <Heading size='lg' mt={3}>Inventory</Heading>
      <Text size={'sm'} color={'gray'}>List of your inventory</Text>
      <Box mt={3}>
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

export default Inventory