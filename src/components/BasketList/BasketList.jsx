import styles from './BasketList.module.scss'
import BasketItem from "../BasketItem/BasketItem.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchBasket} from "../../utils/Api.js";


const BasketList = () => {

    const {basket} = useSelector(state => state.basket)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBasket())
    }, [dispatch])

    const addBasketList = () => {
        if (basket.length > 0) {
            return basket.map((item,index) =>
                <BasketItem
                    key={index}
                    gram={item.gram}
                    name={item.name}
                    price={item.price}
                    imageUrl={item.imageUrl}
                />)
        }

        return <p className={styles.text}>Тут пока пусто :(</p>
    }

    return (
        <div className={styles.list}>
            {addBasketList()}
        </div>
    );
};

export default BasketList;