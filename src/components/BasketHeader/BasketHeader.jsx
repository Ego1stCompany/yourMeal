import React from 'react';
import styles from './BasketHeader.module.scss'
import BasketCounter from "../../UI/BasketCounter/BasketCounter.jsx";

const BasketHeader = () => {
    return (
        <div className={styles.header}>
            <h2 className={styles.header__title}>Корзина</h2>
            <BasketCounter/>
        </div>
    );
};

export default BasketHeader;