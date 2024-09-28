import styles from "./Compound.module.scss";

// eslint-disable-next-line react/prop-types
const Compound = ({compound ,gram}) => {
    return (
        <div className={styles.compound}>
            <span className={styles.compound__title}>Состав:</span>
            <ul className={styles.compound__list}>
                {
                    // eslint-disable-next-line react/prop-types
                    compound.map((item,index) => (
                        <li key={index} className={styles.compound__item}>{item}</li>
                    ))
                }
            </ul>
            <span className={styles.compound__gram}>{gram}г, ккал 430</span>
        </div>
    );
};

export default Compound;