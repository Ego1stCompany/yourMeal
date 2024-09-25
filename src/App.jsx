import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {routesApp} from "./utils/routesApp.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import FormOrder from "./components/FormOrder/FormOrder.jsx";
import {useSelector} from "react-redux";

const App = () => {

    const {order} = useSelector(state => state.basket);

    return (
        <>
            {order === true ? <FormOrder/> : ""}
            <Header/>
            <Navigation/>
            <MainPage>
                <Routes>
                    {
                        routesApp.map(route => (
                            <Route key={route.id} path={route.path} element={route.element}/>
                        ))
                    }
                </Routes>
            </MainPage>
            <Footer/>
        </>
    )
};

export default App;