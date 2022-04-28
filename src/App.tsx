import { Box } from '@chakra-ui/react';
import NavBar from './components/navigation/NavBar';
import HomePage from './pages/HomePage';

function App(): JSX.Element {
  return (
    <Box h="calc(100vh)">
      <NavBar />
      <HomePage />
    </Box>
  );
}

export default App;
