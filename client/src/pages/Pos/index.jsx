import React, { useEffect, useState } from 'react'
import { Box, Card, CardBody, Grid, GridItem, Heading, Image, Tab, Tabs, TabList, TabPanels, TabPanel, Text } from '@chakra-ui/react'
import { instance } from '../../services/axios.js'
import no_image from '../../assests/images/no_image.jpg'

function Pos() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    instance.get('inventory/list')
      .then(function (response) {
        // handle success
        console.log(response);
        setProduct(response.data.data)
      })
  }, [])

  return (
    <Box>
      <Grid templateRows='repeat(2, 3fr)'>
        <GridItem colSpan={4}>
          <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
              <Tab>Favourites</Tab>
              <Tab>All</Tab>
              <Tab>Foods</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Box display={'flex'}>
            {product.map(val => {

              return (
                <Card m={2} p={0} shadow={'lg'}>
                  <CardBody>
                    <Image src={val.image ? `http://127.0.0.1:8000/` + val.image : no_image} w={150} h={150} />
                    <Heading size={'sm'} mt={2}>{val.name}</Heading>
                    <Text>Rs.{val.price}</Text>
                  </CardBody>

                </Card>
              )
            })}
          </Box>
        </GridItem>
        <GridItem colSpan={4}>
            Orders
        </GridItem>
      </Grid>

    </Box>

  )
}

export default Pos