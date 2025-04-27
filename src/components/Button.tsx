import { PlusCircle } from 'phosphor-react';
import styles from './Button.module.css';

export function Button() {
  return (
    <>
      <button className={styles.button} title="Criar tarefa">
        Criar
        <PlusCircle />
      </button>
    </>
  )
}