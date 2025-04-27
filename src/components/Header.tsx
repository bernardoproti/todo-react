import styles from './Header.module.css';
import rocketLogo from '../assets/rocket.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo da Rocket" />
      <h1>to</h1>
      <h1>do</h1>
    </header>
  );
}