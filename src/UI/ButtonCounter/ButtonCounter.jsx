import styles from './ButtonCounter.module.scss'

const ButtonCounter = () => {
    return (
        <div className={styles.counter}>
            <button>-</button>
            <span>1</span>
            <button>+</button>
        </div>
    );
};

export default ButtonCounter;