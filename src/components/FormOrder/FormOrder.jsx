import {useState} from "react";
import ButtonOrder from "../../UI/ButtonOrder/ButtonOrder.jsx";
import ButtonDelete from "../../UI/ButtonDelete/ButtonDelete.jsx";
import donut from '../../assets/donut.png'
import styles from './FormOrder.module.scss'

const FormOrder = () => {

    const [check, setCheck] = useState('pickup');

    const [formOrder, setFormOrder] = useState({
        name: "",
        phone: "",
    })

    const onCheck = (e) => {
        setCheck(e.target.value)

        if (e.target.value !== "pickup") {
            return setFormOrder(prevState => ({
                ...prevState, address: "",
                intercom: "",
                floor: ""
            }))
        } else {
            return setFormOrder((prevState => ({name: prevState.name, phone: prevState.phone})))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formOrder)
    }

    return (
        <section className={styles.section}>
            <div className={styles.order}>
                <div className={styles.order__column}>
                    <img src={donut} alt="dunut" className={styles.order__column_image}/>
                </div>

                <div className={styles.order__form}>
                    <div className={styles.order__form_header}>
                        <ButtonDelete/>
                        <h1 className={styles.order__form_title}>Доставка</h1>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.form__line}>
                            <input
                                type="text"
                                className={styles.form__input}
                                value={formOrder.name}
                                onChange={(e) => setFormOrder(() => ({...formOrder, name: e.target.value}))}
                                placeholder={'Ваше имя'}
                            />
                            <input
                                type="text"
                                value={formOrder.phone}
                                onChange={(e) => setFormOrder(() => ({...formOrder, phone: e.target.value}))}
                                className={styles.form__input}
                                placeholder={'Телефон'}
                            />
                        </div>

                        <div className={styles.form__line}>
                            <label
                                className={styles.form__line_label}>
                                <input
                                    checked={check === 'pickup'}
                                    type="radio"
                                    value={'pickup'}
                                    onChange={onCheck}
                                />
                                Самовывоз
                            </label>
                            <label
                                className={styles.form__line_label}>
                                <input
                                    checked={check === 'delivery'}
                                    type="radio"
                                    value={'delivery'}
                                    onChange={onCheck}
                                />
                                Доставка
                            </label>
                        </div>

                        <div className={styles.form__line}
                             style={check === 'pickup' ? {visibility: 'hidden'} : {visibility: 'visible'}}>
                            <input
                                type="text"
                                value={formOrder.address || ''}
                                onChange={(e) => setFormOrder(() => ({...formOrder, address: e.target.value}))}
                                className={styles.form__input}
                                placeholder={'Улица,дом,квартира'}
                            />
                            <input
                                type="text"
                                value={formOrder.floor || ''}
                                onChange={(e) => setFormOrder(() => ({...formOrder, floor: e.target.value}))}
                                className={styles.form__input}
                                placeholder={'Этаж'}
                            />
                            <input
                                type="text"
                                value={formOrder.intercom || ''}
                                onChange={(e) => setFormOrder(() => ({...formOrder, intercom: e.target.value}))}
                                className={styles.form__input}
                                placeholder={'Домофон'}
                            />
                        </div>
                    </form>

                    <ButtonOrder text={'Оформить'} func={onSubmit}/>
                </div>
            </div>
        </section>
    );
};

export default FormOrder;