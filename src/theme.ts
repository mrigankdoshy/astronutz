import { extendTheme, ThemeConfig } from '@chakra-ui/react';

enum Colors {
  white = '#FFFFFF',
  black = '#000000',
  grey = '#3C3C3E',
  richBlack = '#101420',
  purpleHighlight = '#A300F5',
  spacePurpleLight = '#0E0623',
  spacePurpleDark = '#13001E',
  oxfordBlueLight = '#060F38',
  oxfordBlueDark = '#0A0A2A',
  royalBlueLight = '#1E50FF',
  royalBlueDark = '#112469',
}

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
