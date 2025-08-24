import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.scss'
import { useMobileMenu } from './logic'

/**
 * Компонент шапки сайта.
 * Держит минимальную навигацию и бренд.
 * Адаптивен для мобильных устройств с выпадающим меню.
 */
export default function Header() {
  const { isMenuOpen, closeMobileMenu, toggleMobileMenu } = useMobileMenu()

  console.dir(isMenuOpen);
  return (
    <header className={styles.header}>
      <a href="#main" className="skip-link btn btn--primary">
        Перейти к контенту
      </a>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className="brand" aria-label="Когорта №40 — на главную">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
            <path d="M6 12h12" stroke="currentColor" strokeWidth="2" />
            <path d="M12 6v12" stroke="currentColor" strokeWidth="2" />
          </svg>
          <strong>Когорта №40</strong>
        </Link>

        {/* Мобильная кнопка меню */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-expanded={isMenuOpen}
          aria-label="Открыть меню навигации"
          aria-controls="mobile-menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Десктопная навигация */}
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

        {/* Мобильное меню */}
        <nav
          id="mobile-menu"
          className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
          aria-label="Мобильная навигация"
          aria-hidden={!isMenuOpen}
        >
          <div className={styles.mobileMenuHeader}>
            <span className={styles.mobileMenuTitle}>Меню</span>
            <button
              className={styles.closeButton}
              onClick={closeMobileMenu}
              aria-label="Закрыть меню"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          </div>

          <NavLink
            to="/"
            end
            className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
            onClick={closeMobileMenu}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            Главная
          </NavLink>
          <NavLink
            to="/students"
            className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
            onClick={closeMobileMenu}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-1.7 2.26V9c0-.55-.45-1-1-1s-1 .45-1 1v6h2v7h3zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-.55-.45-1-1-1s-1 .45-1 1v6H5.5v7h2z" />
            </svg>
            Студенты
          </NavLink>
          <NavLink
            to="/artifacts"
            className={({ isActive }) => `${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
            onClick={closeMobileMenu}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            Артефакты
          </NavLink>
          <a
            href="https://github.com/Andival-Sei/cohort40"
            className={`${styles.mobileNavLink} ${styles.githubLink}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Открыть репозиторий проекта на GitHub в новой вкладке"
            onClick={closeMobileMenu}
          >
            <svg
              width="20"
              height="20"
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

        {/* Затемнение фона для мобильного меню */}
        {isMenuOpen && <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu} />}
      </div>
    </header>
  )
}
