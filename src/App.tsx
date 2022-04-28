import { Box } from '@chakra-ui/react';
import BackgroundImage from './assets/hero.png';
import NavBar from './components/navigation/NavBar';
import HomePage from './pages/HomePage';

function App(): JSX.Element {
  return (
    <Box
      backgroundImage={`url(${BackgroundImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="calc(100vh)"
    >
      <NavBar />
      <HomePage />
    </Box>
  );
}

export default App;
