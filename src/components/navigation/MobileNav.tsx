import { Stack, useColorModeValue } from '@chakra-ui/react';
import { Colors } from '../../styles/colors';
import MobileNavItem from './MobileNavItem';
import { navItems } from './shared';

export default function MobileNav() {
  return (
    <Stack
      bg={useColorModeValue(Colors.white, Colors.richBlack)}
      p={4}
      display={{ md: 'none' }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
