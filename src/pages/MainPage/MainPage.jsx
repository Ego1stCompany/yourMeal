import styles from './MainPage.module.scss'
import Basket from "../../components/Basket/Basket.jsx";


// eslint-disable-next-line react/prop-types
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