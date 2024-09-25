import styles from './FormOrder.module.scss'
import donut from '../../assets/donut.png'
import ButtonOrder from "../../UI/ButtonOrder/ButtonOrder.jsx";
import {useDispatch} from "react-redux";
import {removeActiveOrder} from "../../store/basketSlice.js";

const FormOrder = () => {

    const dispatch = useDispatch();

    return (
        <section className={styles.section}>
            <div className={styles.order}>
                <div className={styles.order__column}>
                    <img src={donut} alt="dunut" className={styles.order__column_image}/>
                </div>

                <div className={styles.order__form}>
                    <div className={styles.order__form_header}>
                        <button
                            className={styles.order__form_delete}
                            onClick={() => dispatch(removeActiveOrder())}
                        ></button>
                        <h1 className={styles.order__form_title}>Доставка</h1>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.form__line}>
                            <input type="text" className={styles.form__input} placeholder={'Имя'}/>
                            <input type="text" className={styles.form__input} placeholder={'Имя'}/>
                        </div>

                        <div className={styles.form__line}>
                            <label className={styles.form__line_label}><input type="radio"/>Самовывоз</label>
                            <label className={styles.form__line_label}><input type="radio"/>Доставка</label>
                        </div>

                        <div className={styles.form__line}>
                            <input type="text" className={styles.form__input} placeholder={'Имя'}/>
                            <input type="text" className={styles.form__input} placeholder={'Имя'}/>
                            <input type="text" className={styles.form__input} placeholder={'Имя'}/>
                        </div>
                    </form>

                    <ButtonOrder text={'Оформить'}/>
                </div>
            </div>
        </section>
    );
};

export default FormOrder;