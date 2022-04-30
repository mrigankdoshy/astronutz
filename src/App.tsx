import { Box } from '@chakra-ui/react';
import HottestDrops from './pages/drops/HottestDrops';
import HomePage from './pages/HomePage';

function App(): JSX.Element {
  return (
    <Box height="calc(100vmax)">
      <HomePage />
      <HottestDrops />
    </Box>
  );
}

export default App;
