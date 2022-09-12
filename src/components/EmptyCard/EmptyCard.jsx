import styles from "./EmptyCard.module.css"

const EmptyCard = () => {
   return(
      <div className={styles.card}>
         <p>Выберите повод для поздравления</p>
      </div>
   )
}

export default EmptyCard;