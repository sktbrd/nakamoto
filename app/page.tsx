import { Text, Container, HStack, Image, Flex, Button, Center, VStack } from '@chakra-ui/react';
import ProductList from './components/store/ProductList';
import { dummyProducts } from './components/store/Products';
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';
import { SiFarcaster } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Container maxW="container.lg">
        <Center>
          <Text fontSize={{ base: '6xl', md: '10em' }} fontWeight="bold" m={4}>
            NIKEMOTO
          </Text>
        </Center>
        <Flex align="center" justify="center" p={8} flexDirection={{ base: 'column', md: 'row' }}>
          <Image
            src="/burncard.png"
            alt="Nakamoto"
            height="450px"
            mr={8}
            border={'2px solid limegreen'}
            borderRadius={10}
          />
          <VStack mt={5}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
              If you’re here and have no idea what you’ve stumbled into, then welcome to the insane and wonderful world of Nakamoto Directory. This may have started as a joke, but it has evolved into so much more.
            </Text>
            <Button disabled variant={'outline'} colorScheme="primary" w="full" m={4} mr={8}>
              JOIN
            </Button>
          </VStack>

          {/* <Image src="/pepemoto.png" alt="Nakamoto" boxSize="150px" /> */}
        </Flex>
        {/* <Center>
          <Text fontSize={{ base: '6xl', md: '7em' }} fontWeight="bold" m={4}>
            JUST STAMP IT!
          </Text>
        </Center> */}
        <HStack justify="center" p={8} justifyContent={'space-between'} mt={0}>
          <FaSquareXTwitter size={'100px'} />
          <FaTelegramPlane size={'100px'} />
          <FaDiscord size={'100px'} />
          <SiFarcaster size={'100px'} />
        </HStack>


        {/* <Flex align="center" justify="center" p={8} flexDirection={{ base: 'column', md: 'row' }}>
          <Button disabled variant={'outline'} colorScheme="primary" w="full" m={4} mr={8}>
            Submit Art
          </Button>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            We hope you were entertained as Fake Rares took over Modern Art Theory in Wynwood. If you missed it, it was like all the other fake galleries, except better. Recap to come, but in the meantime, zoom in on this Viva La Vandal masterpiece and check out the scarce.city lot here.
          </Text>
        </Flex> */}
      </Container>
    </>
  );
}
