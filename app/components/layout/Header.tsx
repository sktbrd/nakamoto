'use client'
import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Input, Button, useColorMode, Image, HStack } from '@chakra-ui/react';
import SubmissionModal from '../modal/SubmissionModal';
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'

export default function Header() {
    const { colorMode } = useColorMode();
    const [modalDisplayed, setModalDisplayed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        handleResize(); // Check initial window size

        window.addEventListener('resize', handleResize); // Add event listener for window resize

        return () => {
            window.removeEventListener('resize', handleResize); // Clean up event listener on component unmount
        };
    }, []);

    return (
        <Box bg="background" px={{ base: 4, md: 6 }} py={4} borderBottom={"1px solid"} borderColor={"primary"}>
            <Flex justify="space-between" align="center">
                <HStack as={NextLink} href='/' spacing={2} cursor="pointer">
                    <Image src="/burnHead.svg" alt="Nakamoto" boxSize="100px" />
                    <Text fontSize={{ base: 'xl', md: '2xl' }} mt={2} fontWeight="bold">
                        Nakamoto
                    </Text>
                </HStack>
                {!isMobile && (
                    <>
                        <Link as={NextLink} href='/about' fontSize="lg" fontWeight="bold" color="primary">
                            About us
                        </Link>
                        <Link as={NextLink} href='/stampIndex' fontSize="lg" fontWeight="bold" color="primary">
                            Stamps Index
                        </Link>
                        <Link as={NextLink} href='/rules' fontSize="lg" fontWeight="bold" color="primary">
                            Rules
                        </Link>
                    </>
                )}
                <Button onClick={() => setModalDisplayed(true)}>
                    {'Submit'}
                </Button>
            </Flex>
            <SubmissionModal isOpen={modalDisplayed} onClose={() => setModalDisplayed(false)} />
        </Box>
    );
}
