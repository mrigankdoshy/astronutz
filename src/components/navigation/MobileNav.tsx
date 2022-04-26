import { Stack, useColorModeValue } from '@chakra-ui/react';

import MobileNavItem from './MobileNavItem';
import { navItems } from './shared';

export default function MobileNav() {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
