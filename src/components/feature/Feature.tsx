import { Flex, Stack, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';

export type FeatureProps = Readonly<{
  text: string;
  iconBackground: string;
  icon?: ReactElement;
}>;

export default function Feature({ text, icon, iconBackground }: FeatureProps) {
  return (
    <Stack direction="row" align="center">
      <Flex
        width={8}
        height={8}
        align="center"
        justify="center"
        rounded="full"
        background={iconBackground}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
}
