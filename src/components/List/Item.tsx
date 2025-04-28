import { Trash, Check } from 'phosphor-react';
import styles from './Item.module.css';

interface ItemProps {
  id: number;
  content: string;
  isChecked: boolean;
  onRemoveTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

export function Item({ id, content, isChecked, onRemoveTask, onToggleTask }: ItemProps) {
  function handleRemoveTask() {
    onRemoveTask(id);
  }

  function handleFinishedTask() {
    onToggleTask(id)
  }

  return (
    <div className={styles.item}>
      <div className={styles.itemInfo}>
        <label htmlFor="checkbox" onClick={handleFinishedTask}>
          <input readOnly type="checkbox" />
          <span className={styles.checkbox}>
            <Check className={isChecked ? styles.checkboxChecked : styles.checkboxUnchecked} size={16} />
          </span>

          <p className={isChecked ? styles.contentChecked : styles.contentUnchecked}>{content}</p>
        </label>
      </div>

      <button onClick={handleRemoveTask} className={styles.itemButton}>
        <Trash size={24} />
      </button>
    </div>
  );
}