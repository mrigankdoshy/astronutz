import { Box } from '@chakra-ui/react';
import BackgroundImage from '../assets/hero.png';
import NavBar from '../components/navigation/NavBar';
import Hero from './hero/Hero';

export default function HomePage() {
  return (
    <Box
      backgroundImage={`url(${BackgroundImage})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      height="calc(100vh)"
    >
      <NavBar />
      <Hero />
    </Box>
  );
}
