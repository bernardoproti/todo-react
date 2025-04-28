import clipboard from '../../assets/clipboard.svg';
import styles from './Empty.module.css';

export function Empty() {
  return (
    <footer className={styles.empty}>
      <img src={clipboard} alt="Ícone de prancheta" />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </footer>
  );
}