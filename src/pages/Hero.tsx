/* eslint-disable global-require */
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

export default function Hero() {
  return (
    <Box>
      <Container maxW="3xl">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 8 }}
          py={{ base: 16, md: 64 }}
        >
          <Heading
            fontWeight={650}
            fontSize={{ base: '2xl', sm: '5xl', md: '7xl' }}
            lineHeight="110%"
          >
            Discover, collect, and grow your nutz <br />
          </Heading>
          <Text color="gray.500" fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}>
            A collection of 10,000 nutty NFTs - they are unique digital
            collectibles that are exploring nodes and bytes on the Ethereum
            blockchain.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
