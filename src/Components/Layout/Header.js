import React from 'react';
import backgroundImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {

    return(
    <>  
    <header className={classes.header}>
        <h1>Krish's Deli</h1>
        <HeaderCartButton />
    </header>
    <div className={classes['main-image']} >
        <img src={backgroundImage} alt='Table of food' />
    </div>  
    </>
    );

};

export default Header; 