import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Flex,
  IconButton,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Colors } from '../../styles/colors';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        color={useColorModeValue('gray.600', Colors.white)}
        minHeight="60px"
        paddingY={{ base: 2 }}
        paddingX={{ base: 4 }}
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          marginLeft={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon width={3} height={3} />
              ) : (
                <HamburgerIcon width={5} height={5} />
              )
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily="heading"
            color={useColorModeValue('gray.800', Colors.white)}
          >
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} marginLeft={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="sm"
            fontWeight={600}
            color={Colors.white}
            background={Colors.royalBlueLight}
            rounded="full"
            _hover={{
              background: Colors.royalBlueLightOff,
            }}
          >
            Connect Wallet
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}
