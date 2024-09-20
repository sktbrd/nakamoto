'use client'
import { Text, Container, HStack, Image, Flex, Button, keyframes } from '@chakra-ui/react';
import ProductList from './components/store/ProductList';
import { dummyProducts } from './components/store/Products';

const spin = keyframes`
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        `;

export default function Home() {
  return (
    <>
      <Container maxW="container.lg">
        <Flex align="center" justify="center" p={8} flexDirection={{ base: 'column', md: 'row' }}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            The Nakamoto STAMP Index Directory (NSID) aims to create an official directory for Bitcoin STAMP artworks. Just as Counterparty has Rare Pepe and Fake Rare Directories, Bitcoin STAMP also required a comparable platform.
          </Text>
          <Image
            src="/burnHead.svg"
            alt="Nakamoto"
            boxSize="240px"
            animation={`${spin} 4s linear infinite`}
          />
        </Flex>
        <ProductList products={dummyProducts} columns={3} />
        <Flex align="center" justify="center" p={8} flexDirection={{ base: 'column', md: 'row' }}>
          <Button variant={'outline'} colorScheme="primary" w="full" m={4} mr={8}>
            Submit Art
          </Button>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            This is a community driven project that consisted of founders, scientists, tech devs, and advisors for the curation and management of the upcoming STAMP directory. This directory will allow STAMP artists to submit their artwork to be added to the NSI directory. All approved STAMPS artwork will be displayed on the official website and various social media.          </Text>
        </Flex>
      </Container>
    </>
  );
}
