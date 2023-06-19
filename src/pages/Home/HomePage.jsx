import React from 'react';
import './styles.css';
import NavbarComponent from '../../components/Navbar/NavbarComponent';
import HomePageDealBannerComponent from '../../components/HomepageDealBanner/HomePageDealBannerComponent';

const HomePage = () => {
  return (
    <div>
        <NavbarComponent />
        <HomePageDealBannerComponent />
    </div>
  )
}

export default HomePage
