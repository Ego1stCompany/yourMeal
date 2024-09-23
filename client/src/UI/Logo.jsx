import {useNavigate} from "react-router-dom";
import LogoIcon from '../../public/logo.svg?react'

const Logo = () => {

    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/')}>
            <LogoIcon/>
        </div>
    );
};

export default Logo;