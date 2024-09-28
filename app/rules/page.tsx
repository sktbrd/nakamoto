'use client'

import { Box, Heading, List, ListItem, Text, useTheme } from '@chakra-ui/react';

const Rules: React.FC = () => {
    const { colors } = useTheme();


    return (
        <><Box
            p={5}
            mb={10}
            borderWidth={1}
            borderColor="gray.300"
            borderRadius="md"
            backgroundColor="blackAlpha.800"
            color="white"
            maxW="600px"
            mx="auto"
            bg={colors.background}
        >
            <Text size="lg" mb={4}>
                Submission Requirements
            </Text>
            <List spacing={2}>
                <ListItem>
                    <Text>1. STAMP size does not matter. If you can STAMP it according to STAMP protocol rules, your STAMP qualifies (timing via StampingHub assures your STAMP is valid).</Text>
                </ListItem>
                <ListItem>
                    <Text>2. A minimum of 21+ copies/insurance for any newly STAMPed after the official launch of the STAMPs directory.</Text>
                    <Text>• Note: the amount of STAMPs artwork that has already been minted, the requirements stated above may not apply and does not necessarily result in a rejection for previous minted STAMPs. Founders and Scientists reserved the right to make exceptions based on-based-to-based cases when needed.</Text>
                </ListItem>
                <ListItem>
                    <Text>3. All stamps submitted must be locked and not divisible.</Text>
                </ListItem>
                <ListItem>
                    <Text>4. No NSFW or highly racial artworks. Use good taste and judgment.</Text>
                </ListItem>
                <ListItem>
                    <Text>5. No plagiarism. Do not STAMP other peoples artwork and claim it as your own. Only original artwork will be accepted.</Text>
                </ListItem>
                <ListItem>
                    <Text>6. No artwork from generative or PP collection types, IE: StampPunks, Stamps, Src21 Anime, etc.</Text>
                </ListItem>
                <ListItem>
                    <Text>7. If any artwork that is found to violate the submission guideline (IE: stamping other artist artwork, etc.), will result in immediate disqualification and potentially barring from future submission.</Text>
                </ListItem>
                <ListItem>
                    <Text>8. Each artist is limited to 3 Submissions per Index.</Text>
                </ListItem>
                <ListItem>
                    <Text>9. Once an artwork is approved, a burn card is needed before the artwork gets officially added to the directory.</Text>
                </ListItem>
            </List>

        </Box>
        <Box
            p={5}
            borderWidth={1}
            borderColor="gray.300"
            borderRadius="md"
            backgroundColor="blackAlpha.800"
            color="white"
            maxW="600px"
            mx="auto"
            bg={colors.background}
        >
                <Heading as="h3" size="md" mb={2}>
                    Procedure
                </Heading>
                <List spacing={2}>
                    <ListItem>
                        <Text>1. Go to the official STAMPS Directory at <a href="http://www.nakamotostampindex.com" style={{ color: 'cyan' }}>www.nakamotostampindex.com</a>.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>2. Click on STAMP Submission .</Text>
                    </ListItem>
                    <ListItem>
                        <Text>3. Read through all the directions and guidelines before submitting.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>4. Ensure that the STAMP artwork that you are submitting is in line with the requirements. Refer to the Submission Requirement.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>5. Fill out the submission form provided on the website. Ensure to include the Artist Name, STAMPS Asset Numbers, Title, Description (if any), Email address (for follow-up), Social Media Link for Contact purposes.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>6. Once submitted, allow several days for evaluation to be conducted. The result will be sent out to the provided email or contact information.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>7. If a submitted artwork gets approved, 1 Burn Card will have to be burned for the submitted artwork to be officially added.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>8. A burn transaction confirmation will be required as proof.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>9. Public Open dispensers will be available to acquire the Burn Card if needed.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>10. If a submitted artwork does not get approved, the artist can resubmit in another Index if he/she chose to do so.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>11. For each index, each artist is limited to 3 submissions.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>12. Exceptions can be made depending on the amount of submission occurring.</Text>
                    </ListItem>
                </List>
            </Box></>
    );
}

export default Rules;