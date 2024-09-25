import {NavLink} from "react-router-dom";
import styles from './NavigationCategory.module.scss'
import {useDispatch} from "react-redux";
import {getCategory} from "../../store/productSlice.js";

// eslint-disable-next-line react/prop-types
const NavigationCategory = ({link, name, component}) => {

    const dispatch = useDispatch();

    return (
        <NavLink
            to={link}
            className={({isActive}) => isActive ? styles.item__active : styles.item}
            onClick={() => dispatch(getCategory({name}))}
        >
            {component}
            <span className={styles.item__text}>{name}</span>
        </NavLink>
    );
};

export default NavigationCategory;