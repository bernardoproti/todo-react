import styles from './Header.module.css';

export interface HeaderProps {
  created: number;
  finished: {
    id: number;
    status: boolean;
  }[];
}

export function Header({ created, finished }: HeaderProps) {
  return (
    <header className={styles.taskInfo}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{created}</span>
      </aside>
      <aside>
        <p>Concluídas</p>
        <span>{finished.filter(task => task.status).length} de {created}</span>
      </aside>
    </header>
  );
}