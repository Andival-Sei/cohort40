import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

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
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Главная
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Студенты
          </NavLink>
          <NavLink
            to="/artifacts"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Артефакты
          </NavLink>
          <a
            href="https://github.com/Andival-Sei/cohort40"
            className={`${styles.navLink} ${styles.githubLink}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть репозиторий проекта на GitHub в новой вкладке"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.54 0-.27-.01-1.16-.02-2.11-3.06.67-3.7-1.3-3.7-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.7-1.45-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.4.11-2.93 0 0 .92-.3 3.02 1.13.87-.24 1.8-.36 2.73-.36.93 0 1.86.12 2.73.36 2.1-1.43 3.02-1.13 3.02-1.13.6 1.53.22 2.65.11 2.93.7.77 1.13 1.76 1.13 2.96 0 4.23-2.56 5.16-5 5.44.39.33.74.98.74 1.98 0 1.43-.01 2.58-.01 2.93 0 .3.2.65.75.54 4.37-1.45 7.52-5.57 7.52-10.43C23.02 5.25 18.27.5 12 .5z" />
            </svg>
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
