import NavigationCategory from "../NavigationCategory/NavigationCategory.jsx";
import styles from './Navigation.module.scss'

import BurgerIcon from "../../assets/burger.svg?react";
import SnackIcon from "../../assets/snack.svg?react";
import HotDogIcon from "../../assets/hots.svg?react";
import СomboIcon from "../../assets/combo.svg?react";
import ShawarmaIcon from "../../assets/shawarma.svg?react";
import PizzaIcon from "../../assets/pizza.svg?react";
import WokIcon from "../../assets/wok.svg?react";
import DessertIcon from "../../assets/dessert.svg?react";
import SaucesIcon from "../../assets/sauce.svg?react";

const Navigation = () => {

    const navigationCategoryArray = [
        {
            id: 1,
            name: 'Бургеры',
            link: '/burgers',
            component: <BurgerIcon/>
        },
        {
            id: 2,
            name: 'Закуски',
            link: '/snacks',
            component: <SnackIcon/>
        },
        {
            id: 3,
            name: 'Хот-доги',
            link: '/hotdogs',
            component: <HotDogIcon/>
        },
        {
            id: 4,
            name: 'Комбо',
            link: '/combo',
            component: <СomboIcon/>
        },
        {
            id: 5,
            name: 'Шаурма',
            link: '/shawarma',
            component: <ShawarmaIcon/>
        },
        {
            id: 6,
            name: 'Пицца',
            link: '/pizza',
            component: <PizzaIcon/>
        },
        {
            id: 7,
            name: 'Вок',
            link: '/wok',
            component: <WokIcon/>
        },
        {
            id: 8,
            name: 'Дессерты',
            link: '/dessert',
            component: <DessertIcon/>
        },
        {
            id: 9,
            name: 'Соусы',
            link: '/souses',
            component: <SaucesIcon/>
        }
    ];

    return (
        <nav className={styles.navigation}>
            {
                navigationCategoryArray.map(item => (
                    <NavigationCategory
                        key={item.id}
                        name={item.name}
                        link={item.link}
                        component={item.component}
                    />
                ))
            }
        </nav>
    );
};

export default Navigation;