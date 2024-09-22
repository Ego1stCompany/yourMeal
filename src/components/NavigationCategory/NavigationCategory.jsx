import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './NavigationCategory.module.scss'

const NavigationCategory = ({link, name, component}) => {
    return (
        <NavLink
            to={link}
            className={({isActive}) => isActive ? styles.item__active : styles.item}
        >
            {component}
            <span className={styles.item__text}>{name}</span>
        </NavLink>
    );
};

export default NavigationCategory;