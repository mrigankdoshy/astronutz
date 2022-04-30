import {
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
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
            content: '""',
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
            width={282}
            objectFit="cover"
            src={IMAGE}
          />
        </Box>
        <Stack pt={10} align="center">
          <Text color="gray.500" fontSize="sm" textTransform="uppercase">
            Brand
          </Text>
          <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
            Nice Chair, pink
          </Heading>
          <Stack direction="row" align="center">
            <Text fontWeight={800} fontSize="xl">
              $57
            </Text>
            <Text textDecoration="line-through" color="gray.600">
              $199
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
