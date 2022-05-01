import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { faMeteor, faMoon, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Feature from 'components/feature/Feature';
import { Colors } from 'styles/colors';

export default function About() {
  return (
    <Box paddingX={4} paddingY={12}>
      <Stack
        as={Container}
        spacing={{ base: 2 }}
        maxWidth="6xl"
        textAlign="center"
      >
        <Text color={Colors.purpleHighlight} fontSize="lg">
          About us
        </Text>
        <Heading fontSize="3xl">Welcome to the Astronutz Club 🚀</Heading>
      </Stack>

      <Container maxWidth="6xl" paddingY={{ base: 8, md: 12, lg: 12 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform="uppercase"
              color="blue.400"
              fontWeight={600}
              fontSize={{ base: 'xs', sm: 'xs', md: 'sm' }}
              background={useColorModeValue('blue.50', 'blue.900')}
              padding={2}
              alignSelf="flex-start"
              rounded="md"
            >
              Our Value
            </Text>
            <Heading>A rare digital experience</Heading>
            <Text
              color="gray.500"
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            >
              When you invest in our collection, you are not sold the average
              static JPEG by every instagram hustler today. We are offering you
              access to a metaphysical space pod to be a part of our
              intergalactic club of Astronutters.
            </Text>
            <Text
              color="gray.500"
              fontSize={{ base: 'sm', sm: 'md', md: 'lg' }}
            >
              Everything and anything that we venture into in the future will be
              a part of these perks and can be seamlessly activated by roadmap
              activation.
            </Text>
            <Stack
              spacing={4}
              paddingY={4}
              divider={<StackDivider borderColor={Colors.grey} />}
            >
              <Feature
                icon={<FontAwesomeIcon icon={faMeteor} />}
                iconBackground={useColorModeValue('yellow.100', 'yellow.900')}
                text="Story Room"
              />
              <Feature
                icon={<FontAwesomeIcon icon={faRocket} />}
                iconBackground={useColorModeValue('red.100', 'red.900')}
                text="Merch Drops"
              />
              <Feature
                icon={<FontAwesomeIcon icon={faMoon} />}
                iconBackground={useColorModeValue('purple.100', 'purple.900')}
                text="Equitable Voting Rights"
              />
            </Stack>
          </Stack>
          <Flex marginTop={{ base: 4, sm: 8, md: 16 }} maxHeight="25rem">
            <Image
              src="https://source.unsplash.com/MIdLSFHYuMk"
              rounded="xl"
              alt="feature image"
              objectFit="cover"
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
