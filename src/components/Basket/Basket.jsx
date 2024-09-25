import styles from './Basket.module.scss'
import BasketList from "../BasketList/BasketList.jsx";
import BasketFooter from "../BasketFooter/BasketFooter.jsx";
import BasketHeader from "../BasketHeader/BasketHeader.jsx";



const Basket = () => {

    return (
        <div className={styles.basket}>
            <div className={styles.basket__content}>
               <BasketHeader/>
                <BasketList/>
                <BasketFooter/>
            </div>
        </div>
    );
};

export default Basket;