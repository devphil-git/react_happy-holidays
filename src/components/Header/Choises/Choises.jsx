import { useState } from "react";
import styles from "./Choices.module.css";

const holidays = {
   newyear: "Новый год",
   birthdayWomen: "День рождения  Ж",
   birthdayMen: "День рождения  М",
   womenday: "8 марта",
   knowledgeDay: "День знаний",
}

const Choices = () => {

   // Хуки состояния
   const [isOpenChoises, setOpenChoises] = useState(false);
   const [holiday, setHoliday] = useState('Выбрать праздник');

   // Переключатель открытия окна
   const toggleChoises = () => {
      setOpenChoises(!isOpenChoises);
   }

   // Изменение подписи кнопки
   const changeHoliday = title => {
      setHoliday(title);
      toggleChoises();
   }

   return(
      <div className={styles.wrapper}>
         <button className={styles.button}
                 onClick={toggleChoises}>
            {holiday}
         </button>
         {isOpenChoises && (
            <ul className={styles.list}>
               {Object.entries(holidays).map(item => (
                  <li className={styles.item} 
                      key={item[0]}
                      onClick={() => {changeHoliday(item[1])}}
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