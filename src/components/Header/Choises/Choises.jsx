import { useState, useContext } from "react";
import { holidaysContext } from "../../../context/holidaysContext";
import styles from "./Choices.module.css";

const Choices = () => {

   // Хуки состояния
   const [isOpenChoises, setOpenChoises] = useState(false);
   const { holidays, holiday, changeHoliday } = useContext(holidaysContext);

   // Переключатель открытия окна
   const toggleChoises = () => {
      setOpenChoises(!isOpenChoises);
   }

   return(
      <div className={styles.wrapper}>
         <button className={styles.button}
                 onClick={toggleChoises}>
            {holidays[holiday] || 'Выбрать праздник'}
         </button>
         {isOpenChoises && (
            <ul className={styles.list}>
               {Object.entries(holidays).map(item => (
                  <li className={styles.item} 
                      key={item[0]}
                      onClick={() => {
                         changeHoliday(item[0]);
                         toggleChoises(); }}
                      >
                     {item[1]}
                  </li>   
               ))}
            </ul>
         )}
      </div>
   )
}

export default Choices

