import { Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
  return (
    <Stack w={'full'} align="center">
      <Flex justifyContent={'space-between'} maxW="7xl" minW={['xl', '7xl']} p={5}>
        <Stack>
          <Text>OtelFiyat</Text>
        </Stack>
        <HStack spacing={5}>
          <Text>Anasayfa</Text>
          <Text>Oda Türleri</Text>
          <Text>Galeri</Text>
          <Text>İletişim</Text>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default Hero;
