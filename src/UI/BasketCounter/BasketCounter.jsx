import styles from './BasketCounter.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {basketCounter} from "../../store/basketSlice.js";
import {useEffect} from "react";

const BasketCounter = () => {

    const {counter, basket} = useSelector(state => state.basket);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(basketCounter(basket));
    }, [basket, dispatch]);

    return (
        <span className={styles.counter}>{counter}</span>
    );
};

export default BasketCounter;