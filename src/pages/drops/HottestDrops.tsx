import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import drops from 'data/drops';
import { Colors } from 'styles/colors';

export default function HottestDrops() {
  return (
    <Box padding={{ base: 4, md: 8, lg: 12 }}>
      <Stack
        spacing={{ base: 2 }}
        as={Container}
        maxWidth="6xl"
        textAlign="center"
      >
        <Text color={Colors.purpleHighlight} fontSize="lg">
          NFT Marketplace
        </Text>
        <Heading fontSize="3xl">Hottest Drops 🔥</Heading>
      </Stack>

      <Container maxWidth="6xl" marginTop={4}>
        <SimpleGrid
          columns={{ base: 2, md: 2, lg: 4 }}
          spacing={{ base: 4, md: 6, lg: 10 }}
        >
          {drops.map((drop) => (
            <Card
              image={drop.image}
              title={drop.title}
              artist={drop.artist}
              price={drop.price}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
