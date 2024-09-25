import styles from './Card.module.scss';
import ButtonAdd from "../../UI/ButtonAdd/ButtonAdd.jsx";


// eslint-disable-next-line react/prop-types
const Card = ({id, name, price, gram, imageUrl}) => {

    return (
        <article className={styles.card}>
            <div className={styles.card__header}>
                <img src={imageUrl} alt="card" className={styles.card__image}/>
            </div>

            <div className={styles.card__information}>
                <h2 className={styles.card__information_price}>{price}₽</h2>
                <p className={styles.card__information_text}>{name}</p>
            </div>

            <div className={styles.card__footer}>
                <span className={styles.card__footer_text}>{gram}г</span>
                <ButtonAdd id={id}/>
            </div>
        </article>
    );
};

export default Card;