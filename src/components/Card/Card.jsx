import Image from "./Image/Image";
import Text from "./Text/Text";
import styles from "./Card.module.css"

const Card = () => {
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