import styles from './BasketFooter.module.scss'
import ButtonOrder from "../../UI/ButtonOrder/ButtonOrder.jsx";
import BasketResult from "../../UI/BasketResult/BasketResult.jsx";
import DeliveryIcon from '../../assets/delivery.svg?react'


const BasketFooter = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__result}>
                <span className={styles.footer__result_text}>Итого</span>
                <BasketResult/>
            </div>

            <ButtonOrder/>

            <div className={styles.footer__delivery}>
                <DeliveryIcon/>
                <p className={styles.footer__delivery_text}>Бесплатная доставка</p>
            </div>
        </div>
    );
};

export default BasketFooter;