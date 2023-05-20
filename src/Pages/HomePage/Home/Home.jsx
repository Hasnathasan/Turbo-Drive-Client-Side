import React from 'react';
import Banner from '../HomeBanner/Banner';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import useTitle from '../../../CustomHooks/useTitle';

const Home = () => {
    useTitle("Turbo-Home")
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;