import styles from "./ButtonClose.module.scss";
import {useDispatch} from "react-redux";
import {removeProductInformation} from "../../store/productSlice.js";

const ButtonClose = () => {

    const dispatch = useDispatch();

    return (
        <button className={styles.close} onClick={() => dispatch(removeProductInformation())}></button>
    );
};

export default ButtonClose;