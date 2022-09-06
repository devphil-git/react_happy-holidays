import { useSelector } from "react-redux";
import styles from "./Text.module.css";

const Text = () => {

   const {text, loading} = useSelector(state => state.text);

   return(
      <p className={styles.text}>
         {loading === 'loading' 
            ? 'Загрузка...'
            : text === '' 
               ? 'Выберите повод для поздравления' 
               : text}
      </p>
   )
}

export default Text;
