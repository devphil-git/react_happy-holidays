import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHolidays, setHoliday } from "../../../store/holidaysSlice";
import { fetchText } from "../../../store/textSlice";
import styles from "./Choices.module.css";

const Choices = () => {

   // Хуки состояния
   const [isOpenChoises, setOpenChoises] = useState(false);
   const { holiday, holidays, loading } = useSelector(state => state.holidays);
   const dispatch = useDispatch();

   // Переключатель открытия окна
   const toggleChoises = () => {
      if (loading !== 'success') return;
      setOpenChoises(!isOpenChoises);
   }

   useEffect(() => {
      dispatch(fetchHolidays());
   }, [dispatch])

   return(
      <div className={styles.wrapper}>
         <button className={styles.button}
                 onClick={toggleChoises}>
            {loading !== 'success' ? 'Загрузка...' :  holidays[holiday] || 'Выбрать праздник'}
         </button>
         {isOpenChoises && (
            <ul className={styles.list}>
               {Object.entries(holidays).map(item => (
                  <li className={styles.item} 
                      key={item[0]}
                      onClick={() => {
                         dispatch(setHoliday(item[0]));
                         dispatch(fetchText(item[0]));
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

