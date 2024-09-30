import { Box, Text } from "@chakra-ui/react";

const StampIndex = () => {
    return (
        <Box   
        p={5}
        mb={10}
        borderColor="gray.300"
        borderRadius="md"
        color="white"
        maxW="600px"
        mx="auto">
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
               Nakamoto STAMP index Timeline 
            </Text>
        </Box>
    );
}

export default StampIndex;