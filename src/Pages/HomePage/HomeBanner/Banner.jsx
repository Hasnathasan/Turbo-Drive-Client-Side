import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from '../../../assets/banner1.jpg'
import banner2 from '../../../assets/banner2.jpg'
import banner3 from '../../../assets/banner3.jpg'

const Banner = () => {
    return (
        <div className="h-60 sm:h-72 xl:h-[530px] 2xl:h-[650px]">
  <Carousel>
    <div className={`flex h-full items-center justify-center bg-cover bg-center bg-gray-400 dark:bg-gray-700 dark:text-white`} style={{backgroundImage: `url(${"https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1242.jpg?w=740"})`}}>
      Slide 1
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundImage: `url(${banner2})`}}>
      Slide 2
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white" style={{backgroundImage: `url(${banner3})`}}>
      Slide 3
    </div>
  </Carousel>
</div>
    );
};

export default Banner;