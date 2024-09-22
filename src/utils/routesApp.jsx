import Layout from "../pages/Layout/Layout.jsx";

export const routesApp = [
    {
        id: 1,
        path: "/burgers",
        element: <Layout title={'Бургеры'}/>
    },
    {
        id: 2,
        path: "/snacks",
        element: <Layout title={'Закуски'}/>
    },
    {
        id: 3,
        path: "/hotdogs",
        element: <Layout title={'Хот-доги'}/>
    },
    {
        id: 4,
        path: "/combo",
        element: <Layout title={'Комбо'}/>
    },
    {
        id: 5,
        path: "/shawarma",
        element: <Layout title={'Шаурма'}/>
    },
    {
        id: 6,
        path: "/pizza",
        element: <Layout title={'Пицца'}/>
    },
    {
        id: 7,
        path: "/wok",
        element: <Layout title={'Вок'}/>
    },
    {
        id: 8,
        path: "/dessert",
        element: <Layout title={'Дессерты'}/>
    },
    {
        id: 9,
        path: "/souses",
        element: <Layout title={'Соусы'}/>
    },
]