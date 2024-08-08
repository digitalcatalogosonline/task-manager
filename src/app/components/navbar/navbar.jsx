import Link from "next/link";
import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <header>TODO-APP</header>
      <div>
        <Link href="/" className={styles.link}>ADD TASK</Link>
        <Link href="/task" className={styles.link}>SEE AND REMOVE</Link>
      </div>
    </nav>
  );
}
