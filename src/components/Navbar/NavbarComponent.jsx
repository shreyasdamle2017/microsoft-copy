import React, {useEffect, useState} from 'react';
import './styles.css';
import {VscSearch} from 'react-icons/vsc';
import {AiOutlineShoppingCart, AiOutlineLogin} from 'react-icons/ai';
import {BsChevronDown} from 'react-icons/bs';
import {RxHamburgerMenu} from 'react-icons/rx';


const NavbarComponent = () => {

    const sampleData = [
        {id:1, navTitle: 'Microsoft 365'},
        {id:2, navTitle: 'Teams'},
        {id:3, navTitle: 'Windows'},
        {id:4, navTitle: 'Surface'},
        {id:5, navTitle: 'Xbox'},
        {id:6, navTitle: 'Deals'},
        {id:7, navTitle: 'Small Business'},
        {id:8, navTitle: 'Support'},

    ]

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [navCont, setNavCont] = useState(sampleData);
    const [flag, setFlag] = useState(false);

    const handleResize = () => {
        setWindowSize(window.innerWidth);
    };  
    useEffect(() => {
        window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, [])




  return (
    <div className='navbar-main-contaniner'>
      <div className='nav-com-fl1-container'>
        <div className='nav-com-fl1-items'>
            <ul className='nav-com-list-container'>
                {
                    windowSize <= 800 && <RxHamburgerMenu />
                }
                <li className='text-style-nav-item'>Microsoft Logo</li>
                {sampleData.map((item,index) => {
                    if(((windowSize/ (index+1)) > 170) && windowSize > 800){
                        return  <li key={item.id} className='text-style-nav-item'>{item.navTitle}</li>
                    }
                })}
                {/*windowSize <1360 && <ul className='text-style-nav-item nav-com-drop-cont'> More {sampleData.map((item,index) => {
                    if(((windowSize/ (index+1)) <= 170) && windowSize > 800){
                        return  <li key={item.id} className='nav-com-drpdwn-item'>{item.navTitle}</li>
                    }
                })} </ul> */}
            </ul>
        </div>
      </div>
      <div className='nav-com-fl2-container'>
        <div className='nav-com-fl2-items'>
            <ul className='nav-com-list-container'>
                <li className='nav-item-container text-style-nav-item'><span >All Microsoft </span><BsChevronDown size={15}/></li>
                <li className='nav-item-container text-style-nav-item'><span className='nav-item-span-text'>Search </span><VscSearch size={20} style={{marginLeft:'5px'}}/></li>
                <li className='nav-item-container text-style-nav-item'><span className='nav-item-span-text'>Cart </span><AiOutlineShoppingCart size={20} style={{marginLeft:'5px'}}/></li>
                <li className='nav-item-container text-style-nav-item'><span className='nav-item-span-text'>Sign In </span><AiOutlineLogin size={20} style={{marginLeft:'5px'}}/></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent
