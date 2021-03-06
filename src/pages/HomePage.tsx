import { Box } from '@chakra-ui/react';
import BackgroundImage from 'assets/hero.png';
import NavBar from 'components/navigation/NavBar';
import About from 'pages/about/About';
import HottestDrops from 'pages/drops/HottestDrops';
import Hero from 'pages/hero/Hero';

export default function HomePage() {
  return (
    <Box height="calc(100vhmax)">
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
      <HottestDrops />
      <About />
    </Box>
  );
}
