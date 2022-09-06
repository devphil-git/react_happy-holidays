import { useContext } from "react";
import { imgContext } from "../../../context/imgContext";
import styles from "./Image.module.css";
// import CardImage from "../../../img/card-bg.jpg";

const Image = () => {

   const {urlImg} = useContext(imgContext);

   return(
      <img className={styles.image} src={urlImg} alt="" />
   )
}

export default Image;
