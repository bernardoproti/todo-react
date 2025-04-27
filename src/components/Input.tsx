import styles from "./Input.module.css";
import { Button } from "./Button.tsx";

export function Input() {
  return (
    <form action="submit" className={styles.form} >
      <input type="text" placeholder="Adicione uma nova tarefa" className={styles.input}/>
      <Button />
    </form>
  );
}