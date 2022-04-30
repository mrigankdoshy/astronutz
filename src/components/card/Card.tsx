import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Colors } from '../../styles/colors';

export type CardProps = Readonly<{
  image: string;
  title: string;
  artist: string;
  price: number;
}>;

export default function Card({ image, title, artist, price }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Center paddingY={{ base: 4, md: 8, lg: 12 }}>
      <Box
        role="group"
        background={Colors.white}
        maxWidth="30rem"
        height={370}
        padding={3}
        boxShadow="2xl"
        rounded="xl"
        zIndex={1}
        transition="all .4s ease-out"
        _hover={{
          transition: 'all .3s ease-out',
          border: '4px',
          borderColor: Colors.royalBlueLight,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={image}
          height="16rem"
          width="14rem"
          rounded="lg"
          objectFit="cover"
          transition="all .4s ease-out"
          _groupHover={{ height: '13rem', transition: 'all .3s ease-out' }}
        />

        <Stack paddingTop={4}>
          <Box>
            <Heading
              fontSize="lg"
              fontFamily="body"
              fontWeight={650}
              color={Colors.oxfordBlueLight}
            >
              {title}
            </Heading>

            <Text color={Colors.grey} fontSize="xs" fontWeight={500}>
              @{artist}
            </Text>

            <Stack direction="row" align="center">
              <Text
                fontWeight={800}
                fontSize="md"
                color={Colors.royalBlueLight}
              >
                {price} ETH
              </Text>
              <FontAwesomeIcon
                icon={faEthereum}
                color={Colors.oxfordBlueLight}
              />
            </Stack>
          </Box>

          {isHovered && (
            <Button
              display="inline-flex"
              background={Colors.royalBlueLight}
              color={Colors.white}
              fontSize="sm"
              fontWeight={600}
              rounded="xl"
              transition="all .4s ease-out"
              _hover={{
                background: Colors.royalBlueLightOff,
              }}
            >
              Collect Now
            </Button>
          )}
        </Stack>
      </Box>
    </Center>
  );
}
