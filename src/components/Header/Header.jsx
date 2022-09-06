import { useDispatch, useSelector } from "react-redux";
import { fetchText } from "../../store/textSlice";
import Container from "../Container/Container";
import Choices from "./Choises/Choises";
import styles from "./Header.module.css";

const Header = () => {

   const dispatch = useDispatch();
   const { holiday } = useSelector(state => state.holidays);

   return(
      <header className={styles.header}>
         <Container>
            <div className={styles.wrapper}>
               <div className={styles.buttons}>
                  <button 
                     className={styles.button}
                     disabled = {!holiday} 
                     onClick={() => {
                        dispatch(fetchText(holiday));
                     }}
                  >Изменить поздравление</button>
                  <button className={styles.button}>Изменить фон</button>
               </div>
               <Choices />
            </div>
         </Container>
      </header> 
   )
}

export default Header;  