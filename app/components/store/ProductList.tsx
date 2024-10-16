import { Product } from '@/app/types/Products';
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';

interface ProductListProps {
    products: Product[];
    columns: 1 | 2 | 3 | 4;
}

const ProductList: React.FC<ProductListProps> = ({ products, columns }) => {
    return (
        <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6}>
            {products.map((product) => (
                <GridItem key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src={product.imageUrls[0]} alt={product.name} boxSize="100%" objectFit="cover" />
                    <Box p="6">
                        <Text fontWeight="bold" fontSize="xl">
                            {product.name}
                        </Text>
                        <Text mt="2">{product.description}</Text>
                        <Text mt="2" color="gray.500">
                            ${product.price.toFixed(2)}
                        </Text>
                    </Box>
                </GridItem>
            ))}
        </Grid>
    );
};

export default ProductList;
