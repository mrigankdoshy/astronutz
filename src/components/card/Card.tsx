import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Colors } from '../../styles/colors';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

export default function Card() {
  return (
    <Center py={12}>
      <Box
        role="group"
        p={3}
        maxW="30rem"
        w="full"
        bg={useColorModeValue(Colors.white, Colors.white)}
        boxShadow="2xl"
        rounded="xl"
        pos="relative"
        zIndex={1}
      >
        <Box
          rounded="lg"
          pos="relative"
          height="14rem"
          _after={{
            transition: 'all .3s ease',
            backgroundImage: `url(${IMAGE})`,
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(15px)',
            },
          }}
        >
          <Image
            rounded="lg"
            height={230}
            width={280}
            objectFit="cover"
            src={IMAGE}
          />
        </Box>
        <Stack pt={6}>
          <Box>
            <Heading
              fontSize="lg"
              fontFamily="body"
              fontWeight={650}
              color={Colors.oxfordBlueLight}
            >
              NFT Name
            </Heading>
            <Text color={Colors.grey} fontSize="xs" fontWeight={500}>
              @artistname
            </Text>
            <Stack direction="row" align="center">
              <Text
                fontWeight={800}
                fontSize="md"
                color={Colors.royalBlueLight}
              >
                0.5 ETH
              </Text>
              <FontAwesomeIcon
                icon={faEthereum}
                color={Colors.oxfordBlueLight}
              />
            </Stack>
          </Box>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="sm"
            fontWeight={600}
            color="white"
            rounded="xl"
            bg={Colors.royalBlueLight}
            _hover={{
              bg: Colors.royalBlueLightOff,
            }}
          >
            Collect Now
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
