import styles from './Header.module.css';

export default function Header() {
  return (
    <header>
      <h1 className={styles.headerTagline}>Days Counter and Calculators</h1>
    </header>
  );
}