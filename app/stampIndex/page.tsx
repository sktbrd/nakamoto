"use client"
import { Box, Flex, List, ListIcon, ListItem, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from 'next/image';
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { epochData, StampDetail, stampDetails } from "../utils/StampEpoch";

const StampIndex = () => {
    const [selectedIndex, setSelectedIndex] = useState<string>('');

    const StampIndexData = [
        {
            name: 'Nakamoto Botticelli',
            title: 'The Origin',
            description: 'The ultimate legend in the crypto realm The OG of blockhain, the pioneer who kicked off the revolution.',
            imageUrl: '/artist5.png',
        },
        {
            name: 'Suggonardo Dez Nutci',
            title: 'Suck on Deeznuts',
            description: 'World-renowned Professor Suggonardo Dez Nutci, famous for his mouthwatering chocolate-covered, brown, roasted nuts.',
            imageUrl: '/artist6.png',
        },
        {
            name: 'Michael An Spasso',
            title: 'Space Talk',
            description: 'Spending most of his days holed up in his mom`s basement with the occasional voyage to outer space. Mike might seem like a gentle soul, but don`t be fooled - he`s actually a genius in the world of pioneering OnChain artwork!',
            imageUrl: '/artist7.png',
        },
        {
            name: 'Pepe Paul Paperhand',
            title: 'Insider',
            description: 'Known for his outlandish 20s and 1930 crypto bull forecasts. Paul is both the torchbearer and the trigger finger for some of the most iconic leaks of our generation.',
            imageUrl: '/artist8.png',
        },
        {
            name: 'Kevin Kanksy',
            title: 'Community',
            description: 'Most well known and respected figure in the STAMP community. Kevin is a voice of clarity, but don’t be too quick to trust him – you may find out the truth!',
            imageUrl: '/artist9.png',
        },
    ];

    const handleIndexClick = (index: string) => {
        setSelectedIndex(index); // Atualiza o índice selecionado
    };

    return (
        <Box
            p={5}
            mb={10}
            borderColor="brown"
            borderRadius="md"
            color="white"
            maxW="1200px"
            mx="auto"
        >
            <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
                Nakamoto STAMP Index Timeline
            </Text>

            <SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={2}>
                {StampIndexData.map((artist, index) => (
                    <VStack
                        key={index}
                        textAlign="center"
                        spacing={4}
                        minHeight="300px" // Define uma altura mínima para alinhar
                        justify="space-between" // Garante que o conteúdo seja espaçado
                    >
                        {/* Imagem circular */}
                        <Box
                            borderRadius="full"
                            overflow="hidden"
                            boxSize="85px"
                            border="2px solid white"
                        >
                            <Image
                                src={artist.imageUrl}
                                alt={artist.title}
                                width={85}
                                height={85}
                                objectFit="cover"
                                layout="intrinsic"
                            />
                        </Box>

                        {/* Título */}
                        <Text fontWeight="bold" fontSize="lg">
                            {artist.title}
                        </Text>

                        {/* Descrição */}
                        <Text fontSize="sm" >
                            {artist.description}
                        </Text>

                        {/* Nome do artista */}
                        <Text fontSize="md" color="cyan.400" fontWeight="bold">
                            {artist.name}
                        </Text>
                    </VStack>
                ))}
            </SimpleGrid>

            <Flex mt={12}>
            {/* Box da esquerda */}
            <Box width="20%" borderRight="1px solid green" pr={5}>
                {Object.entries(epochData).map(([epoch, stamps], epochIndex) => (
                    <Box key={epochIndex} mb={4}>
                        <Text fontWeight="bold" color="green.400" mb={2}>
                            {epoch}
                        </Text>
                        <List spacing={2}>
                            {stamps.map((index: string) => (
                                <ListItem
                                    key={index}
                                    cursor="pointer"
                                    onClick={() => handleIndexClick(index)} 
                                >
                                    <ListIcon as={MdCheckCircle} color="green.500" />
                                    {index}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                ))}
            </Box>

            {/* Box centralizado */}
            <Box width="80%" pl={10} textAlign="center">
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                    NAKAMOTO EPOCH
                </Text>
                
                <Text fontSize="2xl" fontWeight="bold" mb={4}>
                    {selectedIndex}
                </Text>

                <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                    {stampDetails[selectedIndex]?.map((stamp: StampDetail, stampIndex: number) => (
                        <VStack
                            key={stampIndex}
                            textAlign="center"
                            spacing={4}
                            bg="gray.800"
                            p={4}
                            borderRadius="md"
                            shadow="md"
                        >
                            {/* Imagem grande */}
                            <Box borderRadius="md" overflow="hidden" boxSize="250px">
                                <Image
                                    src={stamp.imageUrl}
                                    alt={stamp.instance}
                                    width={250}
                                    height={350}
                                    objectFit="cover"
                                />
                            </Box>

                            {/* Informações abaixo da imagem */}
                            <Text fontWeight="bold" fontSize="lg">
                                {stamp.instance}
                            </Text>
                            <Text>Issuance: {stamp.issuance}</Text>
                            <Text>Stars: {stamp.stars}</Text>
                            <Text>Rarity Score: {stamp.rarity}</Text>
                        </VStack>
                    ))}
                </SimpleGrid>
            </Box>
        </Flex>
          
            
        </Box>
    );
};

export default StampIndex;
