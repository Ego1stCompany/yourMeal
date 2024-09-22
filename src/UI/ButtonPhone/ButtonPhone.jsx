import styles from './ButtonPhone.module.scss'
import PhoneIcon from '../../assets/phone.svg?react'


const ButtonPhone = () => {
    return (
        <div className={styles.phone}>
            <PhoneIcon/>
            <a href='tel:+7(930)833-38-11' className={styles.phone__link}>+7(930)833-38-11</a>
        </div>
    );
};

export default ButtonPhone;