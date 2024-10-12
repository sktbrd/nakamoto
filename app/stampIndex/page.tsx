'use client'
import { Badge, Box, Button, Card, CardBody, CardFooter, CardHeader, Center, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Image, List, ListIcon, ListItem, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Skeleton, SkeletonText, Text, useDisclosure, useToast, VStack } from '@chakra-ui/react';
import QRCode from 'qrcode.react';
import { useEffect, useRef, useState } from 'react';
import { FaArrowDown, FaBitcoin, FaCopy } from 'react-icons/fa';
import { MdCheckCircle, MdMenu } from 'react-icons/md';
import formatBTCaddress from '../utils/formatBTCaddress';
import getStampData, { Dispenser, StampInfoResponse } from "../utils/getStampInfo";
import PepeToast from '../utils/pepeToast';
import { stampDetails1, stampDetails2, stampDetails3, stampDetails4, stampDetails5 } from '../utils/StampEpoch';
import { StampIndexData } from '../utils/StampIndexData';
import './styles.css';

const epochData: { [key: string]: string[] } = {
    "EPOCH 1_Nakamoto": ["Index 1#", "Index 2#", "Index 3#", "Index 4#", "Index 5#"],
};

type EpochKeys = keyof typeof epochData;

interface StampCardProps {
    stampId: string;
}


const StampIndex = ({ stampId }: StampCardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedEpoch, setSelectedEpoch] = useState<string>('');
    const [selectedIndex, setSelectedIndex] = useState<string>('');
    const [stampData, setStampData] = useState<StampInfoResponse['data'] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);
    const [dispensers, setDispensers] = useState<Dispenser[]>([]);
    const [selectedDispenser, setSelectedDispenser] = useState<Dispenser | null>(null);
    const [flippedIndex, setFlippedIndex] = useState<null | number>(null); // Ajustado para usar número ou null

    const toast = useToast();

    const handleIndexClick = (index: string | number) => {
        setSelectedIndex(String(index));
        onClose();
    };

    

    const useIntersectionObserver = (options: IntersectionObserverInit) => {
        const [isInView, setIsInView] = useState(false);
        const ref = useRef<HTMLDivElement | null>(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(([entry]) => {
                setIsInView(entry.isIntersecting);
            }, options);
    
            if (ref.current) {
                observer.observe(ref.current);
            }
    
            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [options]);
    
        return { ref, isInView };
    };

    const { ref, isInView } = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: "0px",
    });

    const convertBase64ToImage = (base64: string, mimeType: string) => {
        return `data:${mimeType};base64,${base64}`;
    };

    

    const handleEpochClick = (epoch: string) => {
        const epochKey: string | number = epoch as EpochKeys;
        if (epochData.hasOwnProperty(epochKey)) {
            setSelectedEpoch(String(epochKey));
            setSelectedIndex(epochData[epochKey][0] || '');
        } else {
            console.error(`Epoch "${epoch}" não encontrado.`);
            setSelectedEpoch('');
            setSelectedIndex('');
        }
    };

    const getStampDetailsByIndex = (selectedIndex: string) => {
        switch (selectedIndex) {
            case 'Index 1#':
                return stampDetails1;
            case 'Index 2#':
                return stampDetails2;
            case 'Index 3#':
                return stampDetails3;
            case 'Index 4#':
                return stampDetails4;
            case 'Index 5#':
                return stampDetails5;
            default:
                return [];
        }
    };

    const getStampDetails = (stampId: string) => {
        const allChapters = [
            ...stampDetails1,
            ...stampDetails2,
            ...stampDetails3,
            ...stampDetails4,
            ...stampDetails5,
        ];
        const stampDetails = allChapters.find((stamp) => stamp.STAMP_Asset === stampId);

        const duplicates = allChapters.filter((stamp) => stamp.STAMP_Asset === stampId);
        if (duplicates.length > 1) {
            console.warn(`Duplicate cpid found for stampId: ${stampId}`, duplicates);
        }

        return stampDetails;
    };

    const stampDetails = getStampDetails(stampId);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Use the proxy path to fetch data
                const data = await getStampData(stampId);
                setStampData(data.data);
            } catch (err) {
                setError("Failed to fetch stamp information.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [stampId]);

    useEffect(() => {
        if (stampData?.dispensers && stampData.dispensers.length > 0) {
            const sortedDispensers = [...stampData.dispensers].sort((a, b) => parseFloat(a.btcrate.toString()) - parseFloat(b.btcrate.toString()));
            setDispensers(sortedDispensers);
            setSelectedDispenser(sortedDispensers[0]);
        }
    }, [stampData]);

    useEffect(() => {
        if (stampData?.dispensers && stampData.dispensers.length > 0) {
            const sortedDispensers = [...stampData.dispensers].sort((a, b) => parseFloat(a.btcrate.toString()) - parseFloat(b.btcrate.toString()));
            setDispensers(sortedDispensers);
            setSelectedDispenser(sortedDispensers[0]);
        }
    }, [stampData]);

    const handleCopyAddress = (address: string) => {
        navigator.clipboard.writeText(address);
        toast({
            render: () => <PepeToast title="Pepe Says" description="Successfully copied, bro" />,
            duration: 3000,
            isClosable: true,
            position: 'top-right',
        });
    };

    const renderStampContent = () => {
        if (loading) {
            return <Skeleton boxSize={["200px", "220px"]} borderRadius="10px" />;
        } else if (stampData?.stamp.stamp_mimetype === 'text/html') {
            const htmlContent = atob(stampData.stamp.stamp_base64);
            const styleContent = `
                <style>
                    body {
                        margin: 0;
                        overflow: hidden;
                    }
                </style>
            `;
            const combinedContent = styleContent + htmlContent;
            return (
                <Box
                    width="240px"
                    height="300px"
                    borderRadius="10px"
                    borderWidth="2px"
                    borderColor="yellow"
                    style={{
                        overflow: 'auto',
                    }}
                >
                    <iframe
                        srcDoc={combinedContent}
                        width="100%"
                        height="100%"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-orientation-lock allow-pointer-lock allow-presentation allow-top-navigation allow-top-navigation-by-user-activation"
                        style={{
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'default',
                            overflow: 'hidden',
                        }}
                    />
                </Box>
            );
        } else if (stampData?.stamp.stamp_mimetype.startsWith('image/')) {
            const imageUrl = convertBase64ToImage(stampData.stamp.stamp_base64, stampData.stamp.stamp_mimetype);
            return (
                <Image
                    src={imageUrl}
                    alt={"stamp"}
                    boxSize="240px"
                    borderRadius="10px"
                    borderWidth="2px"
                    objectFit="contain"
                    borderColor="yellow"
                    style={{
                        imageRendering: 'pixelated',
                    }}
                />
            );
        } else {
            return (
                <Image
                    src={stampData?.stamp.stamp_url || 'AZlogo.webp'}
                    alt={"stamp"}
                    boxSize="240px"
                    borderRadius="10px"
                    borderWidth="2px"
                    objectFit="contain"
                    borderColor="yellow"
                    style={{
                        imageRendering: 'pixelated',
                    }}
                />
            );
        }
    };

    const handleCardClick = (index: number) => {
        setFlippedIndex(flippedIndex === index ? null : index); // Se o cartão já está girado, desvira; caso contrário, vira
    };

  


    return (
        <> 
          

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
                    <Box
                        width={["100%", "20%"]}
                        borderRight="1px solid green"
                        pr={5}
                        display={["none", "block"]}
                    >
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
                            {getStampDetailsByIndex(selectedIndex).map((stamp, stampIndex) => {
                                const isCardFlipped = flippedIndex === stampIndex;

                                return (
                                    <Box
                                        key={stampIndex}
                                        width="310px"
                                        height="550px"
                                        onClick={() => handleCardClick(stampIndex)}
                                        position="relative"
                                    >
                                        <Card
                                            sx={{
                                                transition: "transform 0.6s",
                                                transform: isCardFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                                backfaceVisibility: "hidden",
                                            }}
                                            bg={"black"}
                                            border={"2px solid white"}
                                            size="sm"
                                            color={"white"}
                                            borderRadius="20px"
                                        >
                                            <CardHeader
                                                borderBottom={"1px solid white"}
                                                borderTopRadius="10px"
                                                textAlign="center"
                                                bg="orange.300"
                                                p={2}
                                            >
                                                <HStack justify={"center"}>
                                                   
                                                    <Text
                                                        fontWeight={"bold"}
                                                        fontSize={"18px"}
                                                        color="black"
                                                    >
                                                        Index {stampDetails?.epochData}
                                                    </Text>
                                                </HStack>
                                            </CardHeader>
                                            <CardBody bg={"transparent"}>
                                                <Center>{renderStampContent()}</Center>
                                            </CardBody>
                                            {loading ? (
                                                <Box mt={4} p={3} height="145px">
                                                    <SkeletonText noOfLines={3} spacing="4" skeletonHeight="4" />
                                                    <Skeleton mt={2} height="35px" width="100px" />
                                                    <Skeleton mt={2} height="35px" width="100px" />
                                                </Box>
                                            ) : (
                                                stampData && (
                                                    <CardFooter mb={-5}>
                                                        <VStack m={0} w={"100%"}>
                                                            <Box borderWidth="1px" borderRadius="10px" p={3}>
                                                                <Text color={"white"} fontSize="md">
                                                                    <strong>Artist: </strong> {stampDetails?.Rarity_TItle}
                                                                </Text>
                                                                <Text
                                                                    cursor={"pointer"}
                                                                    onClick={() => handleCopyAddress(stampData.stamp.cpid)}
                                                                    color={"white"}
                                                                    fontSize="md"
                                                                >
                                                                    {stampData.stamp.cpid}
                                                                </Text>
                                                            </Box>
                                                            <Button
                                                                leftIcon={<FaBitcoin size={"22px"} />}
                                                                colorScheme="yellow"
                                                                width={"100%"}
                                                                mt={2}
                                                                variant={"outline"}
                                                                w={"auto"}
                                                            >
                                                                Buy Art
                                                            </Button>
                                                        </VStack>
                                                    </CardFooter>
                                                )
                                            )}
                                        </Card>

                                        {/* Segundo Card */}
                                        <Card
                                            sx={{
                                                transition: "transform 0.6s",
                                                transform: isCardFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
                                                position: "absolute",
                                                width: "100%",
                                                height: "100%",
                                                backfaceVisibility: "hidden",
                                            }}
                                            bg={"black"}
                                            border={"2px solid white"}
                                            size="sm"
                                            color={"white"}
                                            borderRadius="20px"
                                        >
                                            <CardHeader
                                                borderBottom={"1px solid white"}
                                                borderTopRadius="10px"
                                                textAlign="center"
                                                bg="gray.900"
                                                p={2}
                                            >
                                                <HStack justify={"center"}>
                                                    <Image
                                                        src={stampData?.stamp.stamp_url || "AZlogo.webp"}
                                                        alt={"stamp"}
                                                        boxSize="20px"
                                                        borderWidth="2px"
                                                        borderColor="yellow"
                                                        position="relative"
                                                    />
                                                    <Text size="md" color="white">
                                                        {stampId}
                                                    </Text>
                                                </HStack>
                                            </CardHeader>
                                            <CardBody textAlign="center" width="100%" height="100%" borderRadius="20px">
                                                <VStack zIndex={9999} spacing={1} mt="30px">
                                                    {dispensers.length === 0 ? (
                                                        <>
                                                            <Image
                                                                src="https://i.pinimg.com/originals/f2/69/72/f26972dfbe5f8226b304379a1beea08f.png"
                                                                alt="no dispensers"
                                                                boxSize="200px"
                                                                mt="10"
                                                            />
                                                            <Text color="gray.500" fontSize="sm">
                                                                No dispensers available
                                                            </Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Text fontSize="md" color="white" mt="-32px">
                                                                {dispensers.length}
                                                            </Text>
                                                            Dispensers available
                                                            <Menu>
                                                                <MenuButton as={Button} rightIcon={<FaArrowDown />} variant="outline" colorScheme="yellow" size="md" borderRadius="10px" _hover={{ bg: "orange.300" }}>
                                                                    Select Dispenser
                                                                </MenuButton>
                                                                <MenuList
                                                                    bg="black"
                                                                    border="1px solid orange"
                                                                    borderRadius="10px"
                                                                    color="white"
                                                                    w="100%"
                                                                    position="absolute"
                                                                    left="50%"
                                                                    transform="translateX(-50%)"
                                                                >
                                                                    {dispensers.map((dispenser, index) => (
                                                                        <MenuItem
                                                                            bg="black"
                                                                            key={index}
                                                                            _hover={{ bg: "orange.300", color: "black" }}
                                                                            onClick={() => setSelectedDispenser(dispenser)}
                                                                            cursor="pointer"
                                                                            p="2"
                                                                        >
                                                                            {formatBTCaddress(dispenser.source) + " - " + dispenser.btcrate + " BTC"}
                                                                        </MenuItem>
                                                                    ))}
                                                                </MenuList>
                                                            </Menu>

                                                            {selectedDispenser && dispensers.length > 0 && (
                                                                <VStack mt={4}>
                                                                    <HStack>
                                                                        <Text fontSize="md" color="white">
                                                                            {formatBTCaddress(selectedDispenser.source)}
                                                                        </Text>
                                                                        <FaCopy size="20px" color="orange" cursor="pointer" onClick={() => handleCopyAddress(selectedDispenser.source)} />
                                                                    </HStack>
                                                                    <Box border={"1px solid orange"} borderRadius="10px" p="10px">
                                                                        <QRCode value={selectedDispenser.source} size={200} bgColor="orange" fgColor="black" />
                                                                    </Box>
                                                                    <HStack>
                                                                        <Badge bg={"orange.200"} color={"black"} className="btc-price">
                                                                            <Text fontSize={"18px"}>{selectedDispenser.btcrate} BTC</Text>
                                                                        </Badge>
                                                                        <Text>-</Text>
                                                                        <Text>{selectedDispenser.give_remaining}/{selectedDispenser.escrow_quantity} left</Text>
                                                                    </HStack>
                                                                </VStack>
                                                            )}
                                                        </>
                                                    )}
                                                </VStack>
                                            </CardBody>
                                            <CardFooter>
                                                <Button leftIcon={<FaArrowDown />} colorScheme="yellow" size="sm" variant={"outline"} w={"auto"} onClick={() => setIsFlipped(false)}>
                                                    Back
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    </Box>
                                );
                            })}

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

        </>
    );
}

export default StampIndex;
