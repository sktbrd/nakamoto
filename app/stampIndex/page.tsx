"use client"
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Text,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import Image from 'next/image';
import { useState } from "react";
import { MdCheckCircle, MdMenu } from "react-icons/md";
import { epochData, EpochKeys, StampDetail, stampDetails } from "../utils/StampEpoch";
import { StampIndexData } from "../utils/StampIndexData";

const StampIndex = () => {
    const [selectedIndex, setSelectedIndex] = useState<string>('');
    const [selectedEpoch, setSelectedEpoch] = useState<string>('');
    const { isOpen, onOpen, onClose } = useDisclosure(); 

    const handleIndexClick = (index: string) => {
        setSelectedIndex(index);
        onClose(); 
    };

    const handleEpochClick = (epoch: string) => {
        const epochKey = epoch as EpochKeys;

        if (epochData.hasOwnProperty(epochKey)) {
            setSelectedEpoch(epochKey);
            setSelectedIndex(epochData[epochKey][0] || '');
        } else {
            console.error(`Epoch "${epoch}" não encontrado.`);
            setSelectedEpoch('');
            setSelectedIndex('');
        }
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
            <Text fontSize={["xl", "2xl"]} fontWeight="bold" mb={4} textAlign="center">
                Nakamoto STAMP Index Timeline
            </Text>



            <SimpleGrid columns={[2, 3, 4, 5]} spacing={2}>
                {StampIndexData.map((artist, index) => (
                    <VStack
                        key={index}
                        textAlign="center"
                        spacing={4}
                        minHeight="300px"
                        justify="space-between"
                    >
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

                        <Text fontWeight="bold" fontSize={["md", "lg"]}>
                            {artist.title}
                        </Text>

                        <Text fontSize={["xs", "sm"]}>
                            {artist.description}
                        </Text>

                        <Text fontSize={["sm", "md"]} color="cyan.400" fontWeight="bold">
                            {artist.name}
                        </Text>
                    </VStack>
                ))}
            </SimpleGrid>
            <Button
                display={["flex", "none"]}
                leftIcon={<MdMenu />}
                colorScheme="teal"
                onClick={onOpen}
                mb={4}
            >
                Menu
            </Button>
            <Flex mt={12} flexDirection={["column", "row"]}>
                <Box width={["100%", "20%"]} display={["none", "block"]} borderRight="1px solid green" pr={5}>
                    {Object.entries(epochData).map(([epoch, stamps], epochIndex) => (
                        <Box key={epochIndex} mb={4}>
                            <Text
                                fontWeight="bold"
                                color="green.400"
                                mb={2}
                                cursor="pointer"
                                onClick={() => handleEpochClick(epoch)}
                            >
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

                <Box width={["100%", "80%"]} pl={[0, 10]} textAlign="center">
                    <Text fontSize={["xl", "2xl"]} fontWeight="bold" mb={4}>
                        {selectedEpoch}
                    </Text>

                    <Text fontSize={["xl", "2xl"]} fontWeight="bold" mb={4}>
                        {selectedIndex || 'Select an Index'}
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
                                    <Image
                                        src={stamp.imageUrl}
                                        alt={stamp.STAMP_Asset}
                                        width={250}
                                        height={350}
                                        objectFit="cover"
                                    />
                               

                                <Text fontWeight="bold" fontSize={["md", "lg"]}>
                                    {stamp.STAMP_Asset}
                                </Text>
                                <Text>Top: {stamp.Top}</Text>
                                <Text>Rarity Score: {stamp.Rarity_Score}</Text>
                                <Text>Rarity Title: {stamp.Rarity_TItle}</Text>
                            </VStack>
                        ))}
                    </SimpleGrid>
                </Box>
            </Flex>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="md">
                <DrawerOverlay>
                    <DrawerContent bg="gray.900" color="white">
                        <DrawerHeader borderBottomWidth="1px" borderColor="green.400" textAlign="center">
                            <Text fontSize="xl" fontWeight="bold" color="green.400">
                                Menu
                            </Text>
                        </DrawerHeader>
                        <DrawerBody>
                            <Text fontWeight="bold" color="green.400" mb={4} textAlign="center">
                                Select Epoch
                            </Text>
                            {Object.entries(epochData).map(([epoch, stamps], epochIndex) => (
                                <Box key={epochIndex} mb={4} p={2} borderRadius="md" _hover={{ bg: "gray.700" }} transition="background 0.2s">
                                    <Text
                                        cursor="pointer"
                                        fontSize="lg"
                                        fontWeight="semibold"
                                        onClick={() => handleEpochClick(epoch)}
                                    >
                                        {epoch}
                                    </Text>
                                    <List spacing={1} mt={1}>
                                        {stamps.map((index: string) => (
                                            <ListItem
                                                key={index}
                                                cursor="pointer"
                                                onClick={() => handleIndexClick(index)}
                                                p={1}
                                                borderRadius="md"
                                                _hover={{ bg: "gray.600" }}
                                                transition="background 0.2s"
                                            >
                                                <ListIcon as={MdCheckCircle} color="green.500" />
                                                {index}
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            ))}
                        </DrawerBody>
                        <DrawerFooter>
                            <Button
                                variant="outline"
                                onClick={onClose}
                                colorScheme="green"
                                width="100%"
                                _hover={{ bg: "green.500", color: "white" }}
                            >
                                Close
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>

        </Box>
    );
};

export default StampIndex;
