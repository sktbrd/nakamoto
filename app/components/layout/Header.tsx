'use client';
import { Box, Button, Flex, HStack, Image, Link, Text, useColorMode } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import SubmissionModal from '../modal/SubmissionModal';

export default function Header() {
    const { colorMode } = useColorMode();
    const [modalDisplayed, setModalDisplayed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); 
        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []);

    return (
        <Box bg="background" px={4} py={4} borderBottom="1px solid" borderColor="primary">
            <Flex justify="space-between" align="center" wrap="wrap">
                <HStack as={NextLink} href='/' spacing={2} cursor="pointer">
                    <Image src="/burnHead.svg" alt="Nakamoto" boxSize="100px" />
                    <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
                        Nakamoto
                    </Text>
                </HStack>

                <HStack spacing={6} display={isMobile ? 'none' : 'flex'}>
                    <Link as={NextLink} href='/about' fontSize="lg" fontWeight="bold" color="primary">
                        About Us
                    </Link>
                    <Link as={NextLink} href='/stampIndex' fontSize="lg" fontWeight="bold" color="primary">
                        Stamps Index
                    </Link>
                    <Link as={NextLink} href='/rules' fontSize="lg" fontWeight="bold" color="primary">
                        Rules
                    </Link>
                </HStack>

                <Button
                    onClick={() => setModalDisplayed(true)}
                    variant="solid"
                    colorScheme="teal"
                    size="lg"
                    ml={{ base: 0, md: 4 }}
                    _hover={{ bg: 'teal.600' }}
                >
                    Submit
                </Button>
            </Flex>
            <SubmissionModal isOpen={modalDisplayed} onClose={() => setModalDisplayed(false)} />
        </Box>
    );
}
