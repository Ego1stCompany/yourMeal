import React from 'react';
import styles from './Card.module.scss';
import card from '../../../public/card.png'
import ButtonAdd from "../../UI/ButtonAdd/ButtonAdd.jsx";

const Card = () => {
    return (
        <article className={styles.card}>
            <div className={styles.card__header}>
                <img src={card} alt="card" className={styles.card__image}/>
            </div>

            <div className={styles.card__information}>
                <h2 className={styles.card__information_price}>689₽</h2>
                <p className={styles.card__information_text}>Мясная бомба</p>
            </div>

            <div className={styles.card__footer}>
                <span className={styles.card__footer_text}>520г</span>
                <ButtonAdd/>
            </div>
        </article>
    );
};

export default Card;