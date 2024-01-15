import React, { useEffect, useState } from 'react'
import { Box, Card, CardBody, Grid, GridItem, Heading, Image, Tab, Tabs, TabList, TabPanels, TabPanel, Text, Button, Input, ScaleFade, useToast, Select, Divider, SlideFade } from '@chakra-ui/react'
import { instance } from '../../services/axios.js'
import no_image from '../../assests/images/no_image.jpg'
import CheckOut from './CheckOut.jsx'
import { PiBowlFood, PiCoffee, PiStarFour, PiTrash } from "react-icons/pi";
import { motion } from 'framer-motion';
import emtybox from '../../assests/images/empty-box.svg'

function Pos() {
  var orderinitialstate = { total: 0, subtotal: 0, discount: 0 }
  const toast = useToast()
  const [product, setProduct] = useState([])
  const [cartItem, setCartitem] = useState([])
  const [order, setOrder] = useState(orderinitialstate)

  useEffect(() => {
    instance.get('inventory/list')
      .then(function (response) {
        // handle success
        console.log(response);
        setProduct(response.data.data)
      })
  }, [])

  useEffect(() => {

    var total = 0
    cartItem.map(val => total += val.item_total)
    setOrder((prev) => ({ ...prev, total: total, subtotal: total }))

  }, [cartItem])

  const add_product = (id, name, price, image) => {

    var temp = [...cartItem]
    //console.log(temp.findIndex(obj=> obj.id == id))
    var item_index = temp.findIndex(obj => obj.id == id)

    if (item_index != -1) {
      console.log("MATCH .....")
      temp[item_index]['item_total'] += price
      temp[item_index]['qnt'] += 1
    }
    else {
      temp.push({ 'id': id, 'name': name, 'price': price, 'image': image, 'qnt': 1, 'item_total': price })
    }

    setCartitem(temp)
  }

  const payment = () => {
    //alert("Payment Done")
    setCartitem([])
    setOrder(orderinitialstate)
    toast({
      title: 'Bill created.',
      description: "We've created your order for you.",
      status: 'success',
      duration: 5000,
      isClosable: true,
      variant: 'top-accent',
      position: 'top'
    })
  }

  return (
    <Box h={'100%'} >

      <Grid templateColumns='repeat(12, 1fr)' h={'100%'}>
        <GridItem colSpan={9} px={3}>
          <Heading size='md'>Point Of Sale</Heading>
          <Tabs variant='soft-rounded' colorScheme='orange'>
            <TabList>
              <Tab><PiStarFour /> <Box ml={1}>Favourites</Box></Tab>
              <Tab>All</Tab>
              <Tab><PiBowlFood /> <Box ml={1}>Foods</Box></Tab>
              <Tab><PiCoffee /> <Box ml={1}>Drinks</Box></Tab>
            </TabList>
            <TabPanels>
              <TabPanel p={0}>
                <Grid templateColumns={'repeat(5, 1fr)'} gap={2}>
                  {product.map(val => {

                    return (
                      <GridItem >
                        <Card m={2} p={0} shadow={'sm'} border={'1px solid'} borderColor={'gray.300'} cursor={'pointer'} onClick={() => add_product(val.id, val.name, val.price, val.image)}>
                          <CardBody p={0} >
                            <Image src={`http://127.0.0.1:8000/` + val.image} fallbackSrc={no_image} boxSize='150px' w='100%' objectFit='cover' />
                            <Box p={2}>
                              <Text fontWeight={400} py={0} >{val.name}</Text>
                              <Text fontWeight={600} fontSize={'20px'}>₹ {val.price}</Text>
                            </Box>

                          </CardBody>

                        </Card>
                      </GridItem>
                    )
                  })}
                </Grid>
              </TabPanel>
              <TabPanel>
                <Box display={'flex'}>

                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>

        </GridItem>
        <GridItem shadow={'sm'} backgroundColor={'white'} colSpan={3} p={3} display={'flex'} flexDir={'column'} justifyContent={'space-between'} border={'1px solid'} borderColor={'gray.200'} borderRadius={'5px'}>
          <Box >
            <CheckOut />
            {/* <Box>
              <Text>Customer</Text>
              <Select size={'sm'} variant='filled'>
                <option value='option1'>Aslam</option>
                <option value='option2'>App</option>
                <option value='option3'>Nisha</option>
              </Select>
            </Box> */}
            <Divider my={2} />
            <Box>
              {cartItem.length == 0 ? <Image src={emtybox} /> : null}
              <SlideFade in={true} offsetY='20px'>
                {cartItem.map(val => {
                  return (
                    <>
                      <ScaleFade initialScale={0.9} in={true}>
                        <Box display={'flex'} py={3} borderBottom={'1px solid'} borderColor={'gray.200'} justifyContent={'space-between'}>

                          <Box ml={2} display={'flex'} >
                            <Image src={val.image ? `http://127.0.0.1:8000/` + val.image : no_image} w={'50px'} h={'50px'} rounded={'lg'} />
                            <Box ml={3}>
                              <Text fontWeight={600}>{val.name}</Text>
                              <Text color={'gray.600'} fontSize={'sm'} fontWeight={500}>{val.qnt} * {val.price} = ₹ {val.item_total}</Text>
                              {/* <Text color={'gray.600'} fontSize={'sm'} fontWeight={500}>₹ {val.price}</Text> */}
                            </Box>

                          </Box>
                          <Box display={'flex'} alignItems={'center'}>
                            <Box display={'flex'}>
                              <Button size={'xs'} variant={'outline'} colorScheme='black'>-</Button>
                              <Box mx={2}>{val.qnt}</Box>
                              <Button size={'xs'} colorScheme='orange' variant={'outline'}>+</Button>
                            </Box>
                            <Box ml={4}>
                              <PiTrash />
                            </Box>
                          </Box>


                        </Box>
                      </ScaleFade>
                    </>
                  )
                })}
              </SlideFade>
            </Box>
          </Box>
          <Box >
            <Box bg={'gray.100'} px={4} py={3}>
              <Box display={'flex'} justifyContent={'space-between'} mb={2}>
                <Text fontSize={'sm'}>Subtotal</Text>
                <Text fontSize={'sm'}>Rs {order.subtotal}</Text>
              </Box>
              <Box display={'flex'} justifyContent={'space-between'} mb={2}>
                <Text fontSize={'sm'}>Discount</Text>
                <Text fontSize={'sm'}>Rs {order.discount}</Text>
              </Box>
              <Box display={'flex'} justifyContent={'space-between'} mb={2}>
                <Text fontSize={'md'} fontWeight={600}>Total</Text>
                <Text fontSize={'md'} fontWeight={600}>Rs {order.total}</Text>
              </Box>
            </Box>

            <Box display={'flex'}>
              <Button w={'100%'} mr={2} colorScheme='red' variant={'outline'}>Cancel</Button>
              <Button colorScheme='orange' w={'100%'} onClick={payment}>Pay </Button>
            </Box>
          </Box>



        </GridItem>
      </Grid>

    </Box>

  )
}

export default Pos