import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from './BasketResult.module.scss'
import {basketResult} from "../../store/basketSlice.js";


const BasketResult = () => {

    const {result, basket} = useSelector(state => state.basket)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(basketResult(basket))
    }, [basket, dispatch])

    return (
        <span className={styles.result}>{result}₽</span>
    );
};

export default BasketResult;