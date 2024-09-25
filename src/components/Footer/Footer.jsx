import React from 'react';
import styles from './Footer.module.scss';
import ButtonPhone from "../../UI/ButtonPhone/ButtonPhone.jsx";

import LogoIcon from '../../assets/logo-footer.svg?react'
import VkIcon from '../../assets/vk.svg?react'
import TgIcon from '../../assets/tg.svg?react'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__column}>
                    <LogoIcon/>
                    <p>© YouMeal, 2022</p>
                </div>

                <div className={styles.footer__contacts}>
                    <div className={styles.footer__contacts_column}>
                        <h2 className={styles.footer__contacts_title}>Номер для заказа</h2>
                        <ButtonPhone/>
                    </div>

                    <div  className={styles.footer__contacts_column}>
                        <h2 className={styles.footer__contacts_title}>Мы в соцсетях</h2>
                        <div className={styles.footer__links}>
                            <button>
                                <VkIcon/>
                            </button>
                            <button>
                                <TgIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;