import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

/**
 * Компонент шапки сайта.
 * Держит минимальную навигацию и бренд.
 */
export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className="brand" aria-label="Когорта №40 — на главную">
          <strong>Когорта №40</strong>
        </Link>
        <nav className={styles.nav} aria-label="Основная навигация">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Студенты
          </NavLink>
          <NavLink
            to="/artifacts"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Артефакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
