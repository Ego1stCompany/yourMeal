import styles from "./Description.module.scss";
import Compound from "../Compound/Compound.jsx";

// eslint-disable-next-line react/prop-types
const Description = ({compound, text, gram}) => {
    return (
        <div className={styles.description}>
            <p className={styles.description__text}>{text}</p>

            <Compound compound={compound} gram={gram}/>
        </div>
    );
};

export default Description;