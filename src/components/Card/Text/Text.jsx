import { useContext } from "react";
import { textContext } from "../../../context/textContext";
import styles from "./Text.module.css";

const Text = () => {

   const {text} = useContext(textContext);

   return(
      <p className={styles.text}>
         {text}
      </p>
   )
}

export default Text;


// Поздравляю с днем рожденья!<br/>
// Пусть будет жизнь полна веселья,<br/>
// Не будет грусти и хлопот,<br/>
// А только счастье круглый год!<br/>
// <br/>
// Желаю творческих успехов,<br/>
// Прекрасных дней, улыбок, смеха.<br/>
// Любви, душевного тепла,<br/>
// Как сказка, чтобы жизнь была!<br/>