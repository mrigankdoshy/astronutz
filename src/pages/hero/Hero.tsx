import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Coinbase from 'assets/coinbase2.png';
import Ethereum from 'assets/ethereum.png';
import Exodus from 'assets/exodus.png';
import MetaMask from 'assets/metamask.png';
import OpenSea from 'assets/opensea.png';

export default function Hero() {
  return (
    <Box>
      <Container maxWidth="3xl">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8 }}
          paddingY={{ base: 16, md: 32, lg: 64 }}
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
      <Stack
        as={Box}
        textAlign="center"
        alignItems="center"
        alignContent="center"
        spacing={{ base: 8, md: 8, lg: 8 }}
        paddingX={{ base: 16, md: 32, lg: 48 }}
      >
        <SimpleGrid
          columns={{ base: 2, md: 3, lg: 5 }}
          spacing={{ base: 16 }}
          textAlign="center"
          alignItems="center"
          alignContent="center"
        >
          <Box
            backgroundImage={`url(${MetaMask})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="10rem"
            height="2rem"
          />
          <Box
            backgroundImage={`url(${Coinbase})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="10rem"
            height="2.1rem"
          />
          <Box
            backgroundImage={`url(${Exodus})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="10rem"
            height="2.2rem"
          />
          <Box
            backgroundImage={`url(${OpenSea})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="10rem"
            height="2.2rem"
          />
          <Box
            backgroundImage={`url(${Ethereum})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            width="10rem"
            height="2.2rem"
          />
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
