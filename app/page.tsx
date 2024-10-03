'use client'
import { Box, Button, Container, Flex, Grid, GridItem, Image, keyframes, Link, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { dummyProducts } from './components/store/Products';

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const flipCardStyles = {
  perspective: "1000px",
};

const flipCardInnerStyles = {
  position: "relative",
  width: "100%",
  height: "100%",
  textAlign: "center",
  transition: "transform 0.6s",
  transformStyle: "preserve-3d",
  willChange: "transform",
};

const flipCardFlippedStyles = {
  transform: "rotateY(180deg)",
};

const flipCardSideStyles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  backfaceVisibility: "hidden",
  willChange: "transform",
};

const flipCardBackStyles = {
  transform: "rotateY(180deg)",
};

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [isFlipped, setIsFlipped] = useState<boolean[]>(Array(dummyProducts.length).fill(false)); 

  const handleClick = (index: number) => {
    const updatedFlips = [...isFlipped];
    updatedFlips[index] = !updatedFlips[index];
    setIsFlipped(updatedFlips);
  };

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
          <Image src="/nsi1.png" alt="First Image" />
        </Grid>

        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={8}>
          STAMP Artworks
        </Text>

        <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6} mb={8}>
          {dummyProducts.map((product, index) => {
            const imageUrl = product.imageUrls[0];

            const width = product.width ?? 0;
            const height = product.height ?? 0;

            const isLandscape = width > height;

            return (
              <GridItem
                key={product.id}
                textAlign="center"
                onClick={() => handleClick(index)}
                colSpan={isLandscape ? 2 : 1}
              >
                <Box sx={{ ...flipCardInnerStyles, ...(isFlipped[index] && flipCardFlippedStyles) }}>
                  {!isFlipped[index] ? (
                    <Image
                      src={imageUrl}
                      alt={product.name}
                      border="2px solid #fff"
                      sx={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <Box sx={{ ...flipCardSideStyles, ...flipCardBackStyles }}>
                      <Image
                        src="/nsi1.png"
                        alt="Primeira Imagem"
                        sx={{
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                  )}

                  <Text fontSize="sm" color="gray.400">STAMP #{product.id}</Text>
                  <Text fontSize="sm" color="gray.400">Artista: {product.name}</Text>
                </Box>
              </GridItem>
            );
          })}
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
            <Image src="/nft.jpeg" alt="Pepe in Bali Exhibition" mb={4} />
            <Image src="/nft2.jpeg" alt="Pepe in Bali Exhibition" mb={4} />
            <Image src="/nft3.jpeg" alt="Pepe in Bali Exhibition" />
          </GridItem>

          <GridItem>
            <Image src="/Pepe in Bali.png" alt="Beeple PepeFest" />
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
    <Image src="/Stamp Logo.png" alt="Stamp Icon" boxSize="50px" />
  </Flex>

  <Flex justify="center" mt={4} gap={4}>
    <Link href="https://link1.com" isExternal>
      <Image src="/twitter.png" alt="Image 1" boxSize="50px" />
    </Link>
    <Link href="https://link2.com" isExternal>
      <Image src="/telegram.png" alt="Image 2" boxSize="50px" />
    </Link>
    <Link href="https://link3.com" isExternal>
      <Image src="/image3.png" alt="Image 3" boxSize="50px" />
    </Link>
  </Flex>
</Container>

    </Box>
  );
}
