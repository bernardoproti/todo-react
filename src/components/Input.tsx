import { FormHTMLAttributes, useState } from 'react';
import styles from './Input.module.css';
import { Button } from './Button.tsx';

export interface InputType extends FormHTMLAttributes<HTMLFormElement> {
  onAddTask: (taskContent: string) => void;
}

export function Input({ onAddTask, ...rest }: InputType) {
  const [text, setText] = useState('');

  function handleAddNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddTask(text);
    setText("");
  }

  return (
    <form onSubmit={handleAddNewTask} className={styles.form} {...rest}>
      <input
        className={styles.input}
        name="taskInput"
        type="text"
        placeholder="Adicione uma nova tarefa"
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button />
    </form>
  );
}
