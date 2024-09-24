import React from 'react';
import styles from './Header.module.scss'
import burger from '../../assets/pic.png'
import Logo from "../../UI/Logo.jsx";

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
               <div className={styles.header__content}>
                   <Logo/>

                   <div className={styles.banner}>
                       <img src={burger} alt="burger" className={styles.banner__image}/>

                       <div className={styles.banner__information}>
                           <h1 className={styles.banner__title}>Только самые <span>сочные бургеры!</span></h1>
                           <p className={styles.banner__text}>Бесплатная доставка от 599₽</p>
                       </div>
                   </div>
               </div>
            </div>
        </header>
    );
};

export default Header;