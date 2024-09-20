'use client';

import { Box, Text, VStack, Button, Image, Card, CardBody, CardFooter, HStack, Container, Center } from '@chakra-ui/react';
import { Product } from '@/app/types/Products';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import QRCode from 'qrcode.react';

interface ProductCardProps {
    product: Product;
}

interface ImageAspectRatio {
    width: number;
    height: number;
}

export default function ProductCard({ product }: ProductCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const discountedPrice = product.price * 0.75;

    //TODO: Check if the Stamp is Squared , Horizontal or Vertical


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front Side */}
            <Center>

                <Card
                    key="front"
                    borderWidth="1px"
                    borderRadius="base"
                    overflow="hidden"
                    p={0}
                    bg="muted"
                    h={'360px'}
                    w={'full'}
                    maxW={'260px'}
                    onClick={() => setIsFlipped(true)}
                >
                    <Image src={product.imageUrls[0]} alt={product.name} boxSize="full" borderRadius={"5px"} />
                </Card>
            </Center>

            {/* Back Side */}
            <Card key="back" borderWidth="1px" borderRadius="base" overflow="hidden" p={1} bg="muted" h={'360px'}>
                <CardBody display="flex" justifyContent="center" alignItems="center">
                    <VStack>
                        {/* <QRCode size={150} value={`hive://commerce/${product.id}`} /> */}
                        <Box m={2} fontSize="lg" fontWeight="bold" color={'text'}>
                            ${discountedPrice.toFixed(2)} HBD
                        </Box>
                        <Button colorScheme="primary" w="full" onClick={() => setIsFlipped(false)}>
                            Go Back
                        </Button>
                    </VStack>
                </CardBody>

            </Card>
        </ReactCardFlip >
    );
}
