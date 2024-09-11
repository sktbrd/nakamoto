'use client'

import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Input,
    FormControl,
    FormLabel,
    Textarea,
    Box,
    HStack,
    useDisclosure,
    useTheme,
} from '@chakra-ui/react';
import axios from 'axios';
interface SubmissionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface StampInfoResponse {
    data: {
        dispensers: Dispenser[];
        dispenses: Dispense[];
        holders: Holder[];
        sends: Send[];
        stamp: StampInfo;
        total: number;
        last_block: number;
    };
    status: string;
    message: string;
}

interface Holder {
    address: string;
    quantity: number;
}

export interface Dispenser {
    block_index: number;
    btcrate: number;
    source: string;
    cpid: string;
    give_quantity: number;
    escrow_quantity: number;
    satoshirate: number;
    give_remaining: number;
    tx_hash: string;
}

export interface Dispense {
    block_index: number;
    cpid: string;
    destination: string;
    dispense_quantity: number;
    dispenser_tx_hash: string;
    source: string;
    tx_hash: string;
}

export interface Send {
    tx_hash: string;
    block_index: number;
    source: string;
    destination: string;
    quantity: number;
}


export interface StampInfo {
    block_index: number;
    block_time: string;
    cpid: string;
    creator: string;
    creator_name: string | null;
    divisible: number;
    file_hash: string;
    ident: string;
    is_btc_stamp: number;
    keyburn: string | null;
    locked: number;
    stamp: number;
    stamp_base64: string;
    stamp_hash: string;
    stamp_mimetype: string;
    stamp_url: string;
    supply: number;
    tx_hash: string;
}


const SubmissionModal: React.FC<SubmissionModalProps> = ({ isOpen, onClose }) => {
    const { colors } = useTheme();

    // TODO: Add Captcha and Require StampChain official URL for submission

    // Create a database for submissions and append submissions to the database


    // Send to Utils 
    const getStampData = async (stampId: string): Promise<StampInfoResponse> => {
        try {
            const stampInfo = await axios.get(`https://stampchain.io/api/v2/stamps/${stampId}`);
            const stampData = stampInfo.data;
            if (stampData) {
                return stampData;
            } else {
                console.error('Stamp ID not found in response data:', stampInfo);
                throw new Error('Stamp ID not found');
            }
        } catch (error) {
            console.error('Error fetching stamp info:', error);
            throw error;
        }
    }

    const getStampImage = async (stampId: string) => {
        try {
            const stampData = await getStampData(stampId);
            console.log(stampData);
        } catch (error) {
            console.error('Error fetching stamp image:', error);
        } finally {
            console.log('Stamp image fetched');
        }
    };


    return (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
            <ModalOverlay />
            <ModalContent
                bg={colors.background}
                border="1px solid"
                borderColor={colors.border}
                boxShadow="none"
                borderRadius="0"
                maxW="600px"
            >
                <HStack
                    bg={colors.primary} // Use theme primary color for the top bar
                    p={2}
                    justifyContent="space-between"
                    alignItems="center"
                    borderTopRadius="none"
                >
                    <Box color={'muted'} fontWeight="bold">
                        Submit Your Content
                    </Box>
                    <HStack spacing={1}>
                        <Button
                            size="xs"
                            bg={colors.background}
                            color={colors.text}
                            border={`1px solid ${colors.border}`}
                            borderRadius="none"
                            _hover={{ bg: colors.background }}
                            _focus={{ boxShadow: "none" }}
                            _active={{ bg: colors.background }}
                        >
                            _
                        </Button>
                        <Button
                            size="xs"
                            bg={colors.background}
                            color={colors.text}
                            border={`1px solid ${colors.border}`}
                            borderRadius="none"
                            _hover={{ bg: colors.background }}
                            _focus={{ boxShadow: "none" }}
                            _active={{ bg: colors.background }}
                        >
                            □
                        </Button>
                        <Button
                            size="xs"
                            bg={colors.background}
                            color={colors.text}
                            border={`1px solid ${colors.border}`}
                            borderRadius="none"
                            _hover={{ bg: colors.background }}
                            _focus={{ boxShadow: "none" }}
                            _active={{ bg: colors.background }}
                            onClick={onClose}
                        >
                            X
                        </Button>
                    </HStack>
                </HStack>
                <ModalBody p={4}>
                    <FormControl mb={4}>
                        <FormLabel color={colors.text}>Title</FormLabel>
                        <Input
                            placeholder="Enter title"
                            bg={colors.muted}
                            borderColor={colors.border}
                            color={colors.text}
                            _placeholder={{ color: colors.text }}
                            borderRadius="none"
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel color={colors.text}>Description</FormLabel>
                        <Textarea
                            placeholder="Enter description"
                            bg={colors.muted}
                            borderColor={colors.border}
                            color={colors.text}
                            _placeholder={{ color: colors.text }}
                            borderRadius="none"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel color={colors.text}>URL</FormLabel>
                        <Input
                            placeholder="Enter URL"
                            bg={colors.muted}
                            borderColor={colors.border}
                            color={colors.text}
                            _placeholder={{ color: colors.text }}
                            borderRadius="none"
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button
                        variant="outline"
                        borderColor={colors.border}
                        color={colors.text}
                        borderRadius="none"
                        _hover={{ bg: colors.muted }}
                        mr={3}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        bg={colors.primary}
                        color={colors.background}
                        border={`1px solid ${colors.border}`}
                        borderRadius="none"
                        _hover={{ bg: colors.primary }}
                        _focus={{ boxShadow: "none" }}
                        _active={{ bg: colors.primary }}
                    >
                        Submit
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default SubmissionModal;
