import { useSelector } from "react-redux";
import styles from "./Image.module.css";
// import CardImage from "../../../img/card-bg.jpg";

const Image = () => {

   const {urlImg} = useSelector(state => state.image);

   return(
      <img className={styles.image} src={urlImg} alt="" />
   )
}

export default Image;
