import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR'
import { Trash, Check } from 'phosphor-react';
import styles from './Item.module.css';

interface ItemProps {
  id: number;
  content: string;
  isChecked: boolean;
  publishedAt: Date;
  onRemoveTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

export function Item({
  id, content, isChecked, publishedAt, onRemoveTask, onToggleTask
}: ItemProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
})

  const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'às' HH:mm'h'", {
    locale: ptBR
  })

  function handleRemoveTask() {
    onRemoveTask(id);
  }

  function handleFinishedTask() {
    onToggleTask(id)
  }

  return (
    <div className={styles.itemInfo}>
      <div className={styles.item}>
        <div>
          <label htmlFor="checkbox" onClick={handleFinishedTask} className={styles.itemLabel}>
            <input readOnly type="checkbox" />
            <span className={styles.checkbox}>
              <Check className={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked} size={14} />
            </span>

            <p className={isChecked ? styles.contentChecked : styles.contentUnchecked}>{content}</p>
          </label>
        </div>

        <button onClick={handleRemoveTask} className={styles.itemButton}>
          <Trash size={18} />
        </button>
      </div>
      <div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </div>
    </div>
  );
}