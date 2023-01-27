import { Flex, Image, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Locations } from '../../constants';

const Slider = () => {
  const swiper = useSwiper();
  const [isLargerThan450] = useMediaQuery('(max-width: 450px)');
  const [isLargerThan950] = useMediaQuery('(max-width: 950px)');

  return (
    <Stack w={'full'} align="center">
      <Flex maxW={'7xl'} align="center">
        <Swiper
          modules={[Navigation, EffectFade]}
          navigation
          speed={800}
          spaceBetween={1}
          slidesPerView={isLargerThan450 ? 1 : 2 && isLargerThan950 ? 2 : 4}
          loop
        >
          {Locations.map((x, index) => {
            return (
              <SwiperSlide
                key={index}
                justify={'flex-start'}
                height={'21rem'}
                boxShadow={'2xl'}
                rounded={'md'}
                p="1rem"
                bg={'#232223'}
                color={'#6C757D'}
                maxW="520px"
              >
                <Stack>
                  <Image src={x.img} width={80} height={40} />
                  <Text textAlign={'center'}>{x.title}</Text>
                </Stack>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Flex>
    </Stack>
  );
};

export default Slider;
