import styles from './ButtonOrder.module.scss';

// eslint-disable-next-line react/prop-types
const ButtonOrder = ({text,func}) => {
    return (
        <button className={styles.order} onClick={func}>{text}</button>
    );
};

export default ButtonOrder;