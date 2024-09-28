import styles from './ButtonCounter.module.scss'
import {useDispatch} from "react-redux";
import {addCountProduct, removeCountProduct} from "../../store/basketSlice.js";

// eslint-disable-next-line react/prop-types
const ButtonCounter = ({count, id}) => {

    const dispatch = useDispatch()

    return (
        <div className={styles.counter}>
            <button onClick={() => dispatch(removeCountProduct({id}))}>-</button>
            <span>{count || 1}</span>
            <button onClick={() => dispatch(addCountProduct({id}))}>+</button>
        </div>
    );
};

export default ButtonCounter;