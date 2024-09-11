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

interface SubmissionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubmissionModal: React.FC<SubmissionModalProps> = ({ isOpen, onClose }) => {
    const { colors } = useTheme();

    // TODO: Add Captcha and Require StampChain official URL for submission

    // Create a database for submissions and append submissions to the database



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
