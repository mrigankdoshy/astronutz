import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import Card from '../../components/card/Card';
import drops from '../../data/drops';
import { Colors } from '../../styles/colors';

export default function HottestDrops() {
  return (
    <Box p={16}>
      <Stack spacing={2} as={Container} maxW="3xl" textAlign="center">
        <Text color={Colors.purpleHighlight} fontSize="lg">
          NFT Marketplace
        </Text>
        <Heading fontSize="3xl">Hottest Drops 🔥</Heading>
      </Stack>

      <Container maxW="6xl" mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
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
