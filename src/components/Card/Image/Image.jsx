import styles from "./Image.module.css";
import CardImage from "../../../img/card-bg.jpg";
// import { imgContext } from "../../../context/imgContext";

const Image = () => {

   // const img = useContext(imgContext);

   return(
      <img className={styles.image} src={CardImage} alt="" />
   )
}

export default Image;
