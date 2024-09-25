import styles from './ButtonAdd.module.scss';
import {useDispatch} from "react-redux";
import {fetchGetProduct} from "../../utils/Api.js";


// eslint-disable-next-line react/prop-types
const ButtonAdd = ({id}) => {

    const dispatch = useDispatch();

    return (
        <button className={styles.add} onClick={() =>  dispatch(fetchGetProduct(id))}>Добавить</button>
    );
};

export default ButtonAdd;