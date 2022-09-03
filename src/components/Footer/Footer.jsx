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
                  <p>Design: <a href="https://t.me/Mrshmallowww">Anastasia Ilina</a></p>
                  <p>Сoder: <a href="https://github.com/devphil-git">My Contacts</a></p>
                  <p>© HBCard, 2022</p>
               </div>

               <ul className={styles.social}>
                  <li className={styles.item}>
                     <a href="https://vk.com/feed" className={styles.link}>
                        <VkIcon />
                     </a>
                  </li>
                  <li className={styles.item}>
                     <a href="https://telegram.org/" className={styles.link}>
                        <TgIcon />
                     </a>
                  </li>
                  <li className={styles.item}>
                     <a href="https://pinterest.com/" className={styles.link}>
                        <PinIcon />
                     </a>
                  </li>
                  <li className={styles.item}>
                     <a href="https://www.stumbleupon.com/" className={styles.link}>
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