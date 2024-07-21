import React from 'react';
import Hero from './home/Hero/Hero';
import Featured from './home/Featured';
import Fruits from './home/Fruits';
import Service from './home/Service';
import Vegetables from './home/Vegetables';
import Banner from './home/Banner';
import Bestseller from './home/Bestseller';
import Fact from './home/Fact';
import Testimonial from './testimonial/Testimonial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from 'swiper/modules';
import { data } from './home/Hero/data';
import Header from './common/header/Header';

const Home = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        speed={3000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {data.map(({ id, colorDeep, colorLite, mainText, subText, shadow, mobileShadow, img, height, mobileHeight }) => (
          <SwiperSlide key={id} style={{ backgroundColor: `${colorLite}` }} className="w-full h-screen flex flex-col md:gap-10 gap-4 pt-4 md:pt-8">
            <Header colorDeep={colorDeep} />
            <Hero
              colorDeep={colorDeep}
              mainText={mainText}
              subText={subText}
              shadow={shadow}
              mobileShadow={mobileShadow}
              img={img}
              height={height}
              mobileHeight={mobileHeight}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Featured />
      <Fruits />
      <Service />
      <Vegetables />
      <Banner />
      <Bestseller />
      <Fact />
      <Testimonial />
    </>
  );
};

export default Home;
