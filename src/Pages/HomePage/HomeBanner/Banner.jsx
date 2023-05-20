import { Carousel } from 'flowbite-react';
import React from 'react';

const Banner = () => {
    return (
        <div className="h-60 sm:h-72 xl:h-[530px] 2xl:h-[650px]">
  <Carousel>
    <div className={`flex h-full items-center justify-center bg-cover bg-center bg-gray-400 dark:bg-gray-700 dark:text-white`} style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1533628635777-112b2239b1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"})`}}>
      Slide 1
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      Slide 2
    </div>
    <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      Slide 3
    </div>
  </Carousel>
</div>
    );
};

export default Banner;