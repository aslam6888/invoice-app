import { Box, Card } from '@chakra-ui/react'
import React from 'react'

function ProductList({ name, price }) {
    return (
        <Card>
            <Text>{name}</Text>
            <Text>{price}</Text>
        </Card>
    )
}

export default ProductList