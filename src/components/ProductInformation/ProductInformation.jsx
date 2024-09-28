import {useDispatch, useSelector} from "react-redux";
import {fetchGetProduct} from "../../utils/Api.js";
import ButtonOrder from "../../UI/ButtonOrder/ButtonOrder.jsx";
import ButtonCounter from "../../UI/ButtonCounter/ButtonCounter.jsx";
import ButtonClose from "../../UI/ButtonClose/ButtonClose.jsx";
import Description from "../Description/Description.jsx";
import styles from './ProductInformation.module.scss'

const ProductInformation = () => {

    const {product} = useSelector(state => state.products);
    const {basket} = useSelector(state => state.basket)

    const dispatch = useDispatch();

    const countProduct = (id) => {
        if(basket !== undefined) return basket.filter(item => item.id === id).map(item => item.count)[0]
    }

    return (
        <section className={styles.section}>
            {
                product.map((product) => (
                    <div className={styles.information} key={product.id}>
                        <div className={styles.information__column}>
                            <div className={styles.information__header}>
                                <h1 className={styles.information__title}>{product.name}</h1>
                            </div>

                            <div className={styles.information__wrapper}>
                                <img src={product.imageUrl} alt="card" className={styles.information__image}/>
                            </div>

                            <ButtonOrder text={'Заказать'} func={() => dispatch(fetchGetProduct(product.id))}/>
                        </div>

                        <div className={styles.information__column}>
                            <div className={styles.information__header}>
                                <div className={styles.information__button}>
                                    <ButtonClose/>
                                </div>
                            </div>

                            <Description text={product.description} compound={product.compound} gram={product.gram}/>

                            <div className={styles.information__footer}>
                                <ButtonCounter id={product.id} count={countProduct(product.id)}/>
                                <span className={styles.information__footer_price}>{product.price}₽</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    );
};

export default ProductInformation;