'use client'
import { Box, Button, Container, Flex, Grid, GridItem, Image, keyframes, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { dummyProducts } from './components/store/Products';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  return (
    <Box bg="#0a0e0b" color="white">
      <Container maxW="container.lg" py={12}>
        <Flex align="center" justify="center" flexDirection={{ base: 'column', md: 'row' }} textAlign={{ base: 'center', md: 'left' }}>

          <Text fontSize="2xl" fontWeight="bold" mb={{ base: 4, md: 0 }} flex={1}>
            Home to only the most immutable and unprunable artworks on the Bitcoin blockchain
            <br />
            <br />
            -NSIDirectory
          </Text>
          <Image
            src="/burnHead.svg"
            alt="Nakamoto"
            boxSize="240px"
            animation={`${spin} 4s linear infinite`}
          />
        </Flex>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} py={12}>
          <GridItem>
            <Image src="/path-to-your-first-image.jpg" alt="First Image" />
          </GridItem>
          <GridItem>
            <Image src="/path-to-your-second-image.jpg" alt="Second Image" />
          </GridItem>
        </Grid>

        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={8}>
          STAMP Artworks
        </Text>

        <Grid templateColumns={{ base: '1fr 1fr', md: 'repeat(3, 1fr)' }} gap={6} mb={8}>
          {dummyProducts.map((product) => (
            <GridItem key={product.id} textAlign="center">
              <Image src={product.imageUrls[0]} alt={product.name} border="2px solid #fff" />
              <Text mt={2} fontSize="lg" fontWeight="bold">{product.name}</Text>
              <Text fontSize="sm">{product.description}</Text>
              <Text fontSize="sm" color="gray.400">STAMP #{product.id}</Text>
              <Text fontSize="sm" color="gray.400">Artist: {product.name}</Text>
            </GridItem>
          ))}
        </Grid>

        <Flex justify="center">
          <Button
            as="a"
            href="/submit-art"
            variant="outline"
            colorScheme="teal"
            size="lg"
            fontWeight="bold"
          >
            Submit Art
          </Button>
        </Flex>
      </Container>

      <Container maxW="container.lg" py={12}>
        <Text fontSize="2xl" fontWeight="bold" mb={8} color="lightgreen">
          Whats new in STAMPS...
        </Text>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={10}>
          <GridItem>
            <Text fontSize="lg" mb={4}>
              <strong>STAMPS Artworks showcasing in Pepe in Bali August 2024</strong>
              <br />
              The Pepe in Bali Exhibition at the Superlative Gallery in Bali showcases Pepe art from August 11th to August 24th, 2024. It educates on Pepes cultural significance, digital art history, and engages with the Pepe and internet culture community. The event features diverse Pepe interpretations in Bali, focusing on digital art and technology, with involvement from curators, collaborators, and the Pepe community. Held in Bali, known for digital art, the exhibition highlights the intersection of art, technology, and meme culture.
            </Text>
            <Image src="/path-to-pepe-bali-exhibition-image.jpg" alt="Pepe in Bali Exhibition" />
          </GridItem>

          <GridItem>
            <Image src="/path-to-beeple-pepefest-image.jpg" alt="Beeple PepeFest" />
            <Text fontSize="lg" mb={4}>
              <strong>STAMPS invading Beeple PepeFest August 2024</strong>
              <br />
              PepeFest at Beeple Studios was a community-led celebration of all things Pepe. A one-day event celebrating the community and culture around Matt Furies infamous 2005 creation.
            </Text>

          </GridItem>
        </Grid>
      </Container>

      <Container maxW="container.lg" py={8}>
        <Flex justify="center" align="center">
          <Image src="/stamp-icon.svg" alt="Stamp Icon" boxSize="50px" />
        </Flex>
      </Container>
    </Box>
  );
}
