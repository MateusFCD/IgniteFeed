import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

interface PropsComment {
  contentComment: string;
  onDeleteComment: any;
}

export function Comment({ contentComment, onDeleteComment }: PropsComment) {
  function handleDeleteComment() {
    onDeleteComment(contentComment);
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/MateusFCD.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mateus Drumond</strong>
              <time title="22 de Dezembro " dateTime="2022-05-11 08:15:30">
                Cerca de 1h átras
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{contentComment}</p>
        </div>

        <footer>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </footer>
      </div>
    </div>
  );
}
