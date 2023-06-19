import React from 'react';
import './styles.css';
import {VscSearch} from 'react-icons/vsc';
import {AiOutlineShoppingCart, AiOutlineLogin} from 'react-icons/ai';
import {BsChevronDown} from 'react-icons/bs';

const NavbarComponent = () => {
  return (
    <div className='navbar-main-contaniner'>
      <div className='nav-com-fl1-container'>
        <div className='nav-com-fl1-items'>
            <ul className='nav-com-list-container'>
                <li className='text-style-nav-item'>Microsoft Logo</li>
                <li className='text-style-nav-item'>Microsoft 365</li>
                <li className='text-style-nav-item'>Teams</li>
                <li className='text-style-nav-item'>Windows</li>
                <li className='text-style-nav-item'>Surface</li>
                <li className='text-style-nav-item'>Xbox</li>
                <li className='text-style-nav-item'>Deals</li>
                <li className='text-style-nav-item'>Small Business</li>
                <li className='text-style-nav-item'>Support</li>
            </ul>
        </div>
      </div>
      <div className='nav-com-fl2-container'>
        <div className='nav-com-fl2-items'>
            <ul className='nav-com-list-container'>
                <li className='nav-item-container text-style-nav-item'>All Microsoft <BsChevronDown size={15}/></li>
                <li className='nav-item-container text-style-nav-item'>Search <VscSearch size={20} style={{marginLeft:'5px'}}/></li>
                <li className='nav-item-container text-style-nav-item'>Cart <AiOutlineShoppingCart size={20} style={{marginLeft:'5px'}}/></li>
                <li className='nav-item-container text-style-nav-item'>Sign In <AiOutlineLogin size={20} style={{marginLeft:'5px'}}/></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent
