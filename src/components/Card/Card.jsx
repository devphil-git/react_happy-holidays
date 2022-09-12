import Image from "./Image/Image";
import Text from "./Text/Text";
import styles from "./Card.module.css"
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchImageId } from "../../store/imageSlice";
import { fetchTextId } from "../../store/textSlice";

const Card = () => {

   const { idText, idImage } = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      if (idText && idImage) {
         dispatch(fetchTextId(idText));
         dispatch(fetchImageId(idImage));
      }
   })

   return(
      <div className={styles.card}>
         <div className={styles.wrapper}>
            <Image />
            <Text />
         </div>
      </div>
   )
}

export default Card;

