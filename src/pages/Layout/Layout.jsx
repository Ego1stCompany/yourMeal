import {useEffect} from 'react';
import styles from './Layout.module.scss'
import Card from "../../components/Card/Card.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../utils/Api.js";

// eslint-disable-next-line react/prop-types
const Layout = ({title}) => {

    const {products, category} = useSelector(state => state.products)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(category))
    }, [dispatch, category])

    return (
        <div className={styles.layout}>
            <h1 className={styles.layout__title}>{title}</h1>

            {
                products.length > 0 ?
                    <div className={styles.layout__list}>
                        {
                            products.map(item =>
                                <Card
                                    key={item.id}
                                    id={item.id}
                                    gram={item.gram}
                                    name={item.name}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                />)
                        }
                    </div>
                    :  <p>Скоро добавим :)</p>
            }
        </div>
    );
};

export default Layout;