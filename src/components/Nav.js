import React, { useState } from 'react'

export default function Nav () {

    const [scroll, setScroll] = useState(false)

    const changeNav = () => {
        window.scrollY >= 80 ? setScroll(true) : setScroll(false);
    }

    window.addEventListener('scroll', changeNav);

    const [screenWidth, setScreenWidth] = useState(window.innerWidth <= 900 ? true : false)

    const mobileview = () => {
        window.innerWidth <= 900 ? setScreenWidth(true) : setScreenWidth(false)
    };
    
    window.addEventListener('resize', mobileview)

    const [menuON, setMenuON] = useState(false);

    const menuView = () => {
        menuON ? setMenuON(false) : setMenuON(true);
    }

    const mobileNav = () => {
        return (    
            <span onClick={menuView} className={menuON ? 'menu-close' : ''}>
                <div className={menuON ? 'menu-off' : 'mobile-menu-container'}>
                    <div className='mobile--menu'></div>
                    <div className='mobile--menu'></div>
                    <div className='mobile--menu'></div>
                </div>
                <div className={menuON ? 'drop-menu' : 'drop-menu visible-off' }> 
                        <ul>
                            <li><a href='#about'>About me</a></li>
                            <li><a href='#skills'>Skills</a></li>
                            <li><a href='#portfolio'>Portfolio</a></li>
                            <li><a href='#contact'>CONTACT ME</a></li>
                        </ul>
                </div>
            </span>
        )
    }

    const wideNav = () => {
        return (
            <>
                <div className='pages'>
                    <ul>
                        <li><a href='#about'>About me</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#portfolio'>Portfolio</a></li>
                        <li><a href='#contact'>CONTACT ME</a></li>
                    </ul>
                </div>
            </>
        )
    }

    return (
        <nav id={screenWidth ? 'mobile--nav' : 'nav'} className= {scroll ? 'navBlack' : ''}>
            <div className={menuON ? 'visible-off' : 'logo'}>
                <img src='./images/logo.png' alt='logo'/>
            </div>
            { screenWidth ? mobileNav() : wideNav() }
        </nav>
    )
}