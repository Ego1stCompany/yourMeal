import styles from "./ButtonDelete.module.scss";
import {removeActiveOrder} from "../../store/basketSlice.js";
import {useDispatch} from "react-redux";

const ButtonDelete = () => {

    const dispatch = useDispatch();

    return (
        <button
            className={styles.delete}
            onClick={() => dispatch(removeActiveOrder())}
        ></button>
    );
};

export default ButtonDelete;