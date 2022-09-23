import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
        <img src="https://github.com/MateusFCD.png" />

        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.author}></div>
                </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>

            <footer>
                Aplaudir
            </footer>
        </div>
    </div>
  )
}
