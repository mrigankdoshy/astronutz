import { CheckIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Colors } from 'styles/colors';

export default function SubscribeNewsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial'
  );

  return (
    <Container
      maxWidth="4xl"
      background={Colors.royalBlueDarkOff}
      boxShadow="xl"
      rounded="xl"
      padding={16}
      direction="column"
      align="center"
    >
      <Heading as="h2" fontSize={{ base: 'xl', sm: '2xl' }} marginBottom={5}>
        Never miss a drop!
      </Heading>
      <Text
        color="gray.400"
        fontWeight={500}
        fontSize={{ base: 'sm', sm: 'md', md: 'md' }}
        marginBottom={5}
      >
        Subscribe to our super-exclusive drop list and be the first to know
        about Astronutz drops
      </Text>
      <Stack
        as="form"
        direction={{ base: 'row' }}
        spacing="16px"
        paddingX={{ base: 64, sm: 4, md: 32 }}
        marginTop={8}
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          setError(false);
          setState('submitting');

          // remove this code and implement submit logic right here
          setTimeout(() => {
            if (email === 'fail@example.com') {
              setError(true);
              setState('initial');
              return;
            }

            setState('success');
          }, 1000);
        }}
      >
        <FormControl>
          <Input
            required
            id="email"
            type="email"
            variant="solid"
            placeholder="Enter your email address"
            aria-label="Your Email"
            rounded="full"
            color="gray.200"
            background="gray.700"
            opacity={0.8}
            borderWidth={2}
            borderColor="gray.700"
            value={email}
            disabled={state !== 'initial'}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            _placeholder={{
              color: 'gray.400',
            }}
            _focus={{
              background: 'gray.800',
              outline: 'none',
            }}
          />
        </FormControl>
        <FormControl width={{ base: '40%' }}>
          <Button
            display={{ base: 'inline-flex' }}
            width="100%"
            colorScheme={state === 'success' ? 'green' : 'blue'}
            isLoading={state === 'submitting'}
            type={state === 'success' ? 'button' : 'submit'}
            fontSize="sm"
            fontWeight={600}
            color={Colors.white}
            background={Colors.royalBlueLight}
            rounded="full"
            _hover={{
              background: Colors.royalBlueLightOff,
            }}
          >
            {state === 'success' ? <CheckIcon /> : 'Submit'}
          </Button>
        </FormControl>
      </Stack>
      <Text
        marginTop={4}
        textAlign="center"
        color={error ? 'red.500' : 'gray.500'}
      >
        {error
          ? 'Oh no an error occured! 😢 Please try again.'
          : "You won't receive any spam! ✌️"}
      </Text>
    </Container>
  );
}
