import styles from './BasketItem.module.scss'
import ButtonCounter from "../../UI/ButtonCounter/ButtonCounter.jsx";

// eslint-disable-next-line react/prop-types
const BasketItem = ({name, price, gram, imageUrl}) => {

    return (
        <article className={styles.product}>
            <img src={imageUrl} alt="card" className={styles.product__image}/>

            <div className={styles.product__information}>
                <div className={styles.product__information_header}>
                    <h3 className={styles.product__information_name}>{name}</h3>
                    <span className={styles.product__information_span}>{gram}г</span>
                </div>

                <span className={styles.product__price}>{price}₽</span>
            </div>

            <ButtonCounter/>
        </article>
    );
};

export default BasketItem;