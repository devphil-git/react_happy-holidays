import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHolidays } from "../../../store/holidaysSlice";
import { fetchImage } from "../../../store/imageSlice";
import { fetchText } from "../../../store/textSlice";
import styles from "./Choices.module.css";
import { NavLink, useParams } from 'react-router-dom';

const Choices = () => {

   // Хуки состояния
   const [isOpenChoises, setOpenChoises] = useState(false);
   const { holidays, loading } = useSelector(state => state.holidays);
   const dispatch = useDispatch();
   const { holiday } = useParams();

   // Переключатель открытия окна
   const toggleChoises = () => {
      if (loading !== 'success') return;
      setOpenChoises(!isOpenChoises);
   }

   useEffect(() => {
      dispatch(fetchHolidays());
      if (holiday) {
         dispatch(fetchText(holiday));
         dispatch(fetchImage(holiday));
      }
   }, [dispatch, holiday])

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
                        toggleChoises(); }}>
                     <NavLink 
                        to={`card/${item[0]}`}
                        className={({isActive}) => (isActive ? styles.linkActive : '')}
                     >{item[1]}</NavLink>
                  </li>   
               ))}
            </ul>
         )}
      </div>
   )
}

export default Choices

