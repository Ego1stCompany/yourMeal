import React from 'react';
import styles from './MainPage.module.scss'
import Basket from "../../components/Basket/Basket.jsx";

const MainPage = ({children}) => {
    return (
        <main className={styles.main}>
            <section className={styles.container}>
                <Basket/>
                {children}
            </section>
        </main>
    );
};

export default MainPage;