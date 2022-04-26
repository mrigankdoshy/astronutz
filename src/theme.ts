import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { Colors } from './styles/colors';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        bgGradient: `linear(to-br, ${Colors.spacePurpleDark}, ${Colors.oxfordBlueLight}, ${Colors.spacePurpleLight})`,
        color: 'white',
      },
    },
  },
});

export default theme;
