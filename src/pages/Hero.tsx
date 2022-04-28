/* eslint-disable global-require */
import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import BackgroundImage from '../assets/hero.png';

export default function Hero() {
  return (
    <Box
      backgroundImage={`url(${BackgroundImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="calc(100vh)"
    >
      <Container maxW="3xl">
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '7xl' }}
            lineHeight="110%"
          >
            Discover, Collect and Sell Rare NFTs <br />
          </Heading>
          <Text color="gray.500">
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
          <Stack
            direction="column"
            spacing={3}
            align="center"
            alignSelf="center"
            position="relative"
          >
            <Button
              colorScheme="green"
              bg="green.400"
              rounded="full"
              px={6}
              _hover={{
                bg: 'green.500',
              }}
            >
              Get Started
            </Button>
            <Button variant="link" colorScheme="blue" size="sm">
              Learn more
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
