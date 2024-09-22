import React from 'react';
import styles from './BasketItem.module.scss'
import card from '../../../public/card.png'
import ButtonCounter from "../../UI/ButtonCounter/ButtonCounter.jsx";

const BasketItem = () => {
    return (
        <article className={styles.product}>
            <img src={card} alt="card" className={styles.product__image}/>

            <div className={styles.product__information}>
                <div className={styles.product__information_header}>
                    <h3 className={styles.product__information_name}>Супер сырный</h3>
                    <span className={styles.product__information_span}>512г</span>
                </div>

                <span className={styles.product__price}>512₽</span>
            </div>

            <ButtonCounter/>
        </article>
    );
};

export default BasketItem;