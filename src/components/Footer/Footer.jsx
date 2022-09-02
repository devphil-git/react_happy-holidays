import Container from "../Container/Container";
import styles from "./Footer.module.css";
import { ReactComponent as VkIcon } from "../../img/vk.svg";
import { ReactComponent as TgIcon } from "../../img/tg.svg";
import { ReactComponent as PinIcon } from "../../img/pinterest.svg";
import { ReactComponent as StumIcon } from "../../img/stumbleupon.svg";

const Footer = () => {
   return(
      <footer className={styles.footer}>
         <Container>
            <div className={styles.wrapper}>
               <div className={styles.contacts}>
                  <p>Design: <a href="#">Anastasia Ilina</a></p>
                  <p>Сoder: <a href="#">My Contacts</a></p>
                  <p>© HBCard, 2022</p>
               </div>

               <ul className={styles.social}>
                  <li className={styles.item}>
                     <a href="#" className={styles.link}>
                        <VkIcon />
                     </a>
                  </li>
                  <li className={styles.item}>
                     <a href="#" className={styles.link}>
                        <TgIcon />
                     </a>
                  </li>
                  <li className={styles.item}>
                     <a href="#" className={styles.link}>
                        <PinIcon />
                     </a>
                  </li>
                  <li className={styles.item}>
                     <a href="#" className={styles.link}>
                        <StumIcon />
                     </a>
                  </li>
               </ul>
            </div>
         </Container>
      </footer>
   )
}

export default Footer;