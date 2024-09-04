import { Text, Container, HStack, Image, Flex, Button } from '@chakra-ui/react';
import ProductList from './components/store/ProductList';
import { dummyProducts } from './components/store/Products';

export default function Home() {
  return (
    <>
      <Container maxW="container.lg">
        <Flex align="center" justify="center" p={8} flexDirection={{ base: 'column', md: 'row' }}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            If you’re here and have no idea what you’ve stumbled into, then welcome to the insane and wonderful world of Fake Rares. This may have started as a joke, but it has evolved into so much more. Whether you’re an artist or a collector, feel free to poke around the site. Most of the action happens in our telegram though, so come say hi.
          </Text>
          <Image src="/pepemoto.png" alt="Nakamoto" boxSize="150px" />
        </Flex>
        <ProductList products={dummyProducts} columns={3} />
        <Flex align="center" justify="center" p={8} flexDirection={{ base: 'column', md: 'row' }}>
          <Button variant={'outline'} colorScheme="primary" w="full" m={4} mr={8}>
            Submit Art
          </Button>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            We hope you were entertained as Fake Rares took over Modern Art Theory in Wynwood. If you missed it, it was like all the other fake galleries, except better. Recap to come, but in the meantime, zoom in on this Viva La Vandal masterpiece and check out the scarce.city lot here.
          </Text>
        </Flex>
      </Container>
    </>
  );
}
