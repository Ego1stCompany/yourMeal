import styles from './BasketList.module.scss'
import BasketItem from "../BasketItem/BasketItem.jsx";

const BasketList = () => {
    return (
        <div className={styles.list}>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
            <BasketItem/>
        </div>
    );
};

export default BasketList;