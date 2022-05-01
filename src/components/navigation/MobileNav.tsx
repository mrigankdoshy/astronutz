import { Stack, useColorModeValue } from '@chakra-ui/react';
import MobileNavItem from 'components/navigation/MobileNavItem';
import { navItems } from 'components/navigation/shared';
import { Colors } from 'styles/colors';

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
