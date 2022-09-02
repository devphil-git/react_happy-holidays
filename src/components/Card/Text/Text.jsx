import styles from "./Text.module.css";

const Text = () => {
   return(
      <div className={styles.wrapper}>
         <p className={styles.text}>
            Поздравляю с днем рожденья!
            Пусть будет жизнь полна веселья,
            Не будет грусти и хлопот,
            А только счастье круглый год!

            Желаю творческих успехов,
            Прекрасных дней, улыбок, смеха.
            Любви, душевного тепла,
            Как сказка, чтобы жизнь была!
         </p>
      </div>
   )
}

export default Text;