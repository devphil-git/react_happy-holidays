import { useDispatch } from "react-redux";
import { fetchText } from "../../store/textSlice";
import { fetchImage } from "../../store/imageSlice";
import Container from "../Container/Container";
import Choices from "./Choises/Choises";
import styles from "./Header.module.css";
import { useParams } from "react-router-dom";

const Header = () => {

   const dispatch = useDispatch();
   const { holiday } = useParams();

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
                  <button 
                     className={styles.button}
                     disabled = {!holiday}
                     onClick={() => {
                        dispatch(fetchImage(holiday));
                     }}
                  
                  >Изменить фон</button>
               </div>
               <Choices />
            </div>
         </Container>
      </header> 
   )
}

export default Header;  