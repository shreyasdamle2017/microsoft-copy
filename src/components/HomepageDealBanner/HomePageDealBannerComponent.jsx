import React from 'react';
import './styles.css';
import {AiOutlineRight} from 'react-icons/ai';

const HomePageDealBannerComponent = () => {
  return (
    <div className='hom-ban-main-container'>
        <div className='hom-ban-com-container'>
            <span className='hom-ban-text-style'>
            Don’t miss your chance to save up to $600 on select Surface Laptop 4. Shop now <AiOutlineRight size={20} className='hom-ban-icon-style'/>
            </span>
        </div>
    </div>
  )
}

export default HomePageDealBannerComponent
