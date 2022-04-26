import { Box } from '@chakra-ui/react';

import NavBar from './components/navigation/NavBar';

function App(): JSX.Element {
  return (
    <Box h="calc(100vh)">
      <NavBar />
    </Box>
  );
}

export default App;
