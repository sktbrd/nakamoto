'use client'
import React, { useState } from 'react';
import { Box, Flex, Text, Input, Button, useColorMode, Image, HStack } from '@chakra-ui/react';
import SubmissionModal from '../modal/SubmissionModal';

export default function Header() {
    const { colorMode } = useColorMode();
    const [modalDisplayed, setModalDisplayed] = useState(false);

    return (
        <Box bg="secondary" px={{ base: 4, md: 6 }} py={4}>
            <Flex justify="space-between" align="center">
                <HStack>
                    <Image src="/pepemoto.png" alt="Nakamoto" boxSize="50px" />
                    <Text fontSize={{ base: 'xl', md: '2xl' }} mt={2} fontWeight="bold">
                        Nakamoto
                    </Text>
                </HStack>
                <Input
                    placeholder="Search Stamps"
                    maxW="400px"
                    bg="muted"
                    borderColor="border"
                    _placeholder={{ color: 'text' }}
                    display={{ base: 'none', md: 'block' }}
                />
                <Button onClick={() => setModalDisplayed(true)}>
                    {'Submit'}
                </Button>
            </Flex>
            <SubmissionModal isOpen={modalDisplayed} onClose={() => setModalDisplayed(false)} />
        </Box>
    );
}
