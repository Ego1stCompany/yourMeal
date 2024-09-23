import React from 'react';
import styles from './Layout.module.scss'
import Card from "../../components/Card/Card.jsx";

const Layout = ({title}) => {
    return (
        <div className={styles.layout}>
            <h1 className={styles.layout__title}>{title}</h1>

            <div className={styles.layout__list}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default Layout;