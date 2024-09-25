import styles from './BasketFooter.module.scss'
import ButtonOrder from "../../UI/ButtonOrder/ButtonOrder.jsx";
import BasketResult from "../../UI/BasketResult/BasketResult.jsx";
import DeliveryIcon from '../../assets/delivery.svg?react'
import {useDispatch, useSelector} from "react-redux";
import {addActiveOrder} from "../../store/basketSlice.js";


const BasketFooter = () => {

    const dispatch = useDispatch();

    const addActiveFormOrder = () => dispatch(addActiveOrder());

    const {counter} = useSelector(state => state.basket)

    return (
        counter ? <div className={styles.footer}>
            <div className={styles.footer__result}>
                <span className={styles.footer__result_text}>Итого</span>
                <BasketResult/>
            </div>

            <ButtonOrder text={'Оформить заказ'} func={addActiveFormOrder}/>

            <div className={styles.footer__delivery}>
                <DeliveryIcon/>
                <p className={styles.footer__delivery_text}>Бесплатная доставка</p>
            </div>
        </div> : ''
    );
};

export default BasketFooter;