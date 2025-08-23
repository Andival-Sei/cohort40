/**
 * Подвал сайта — простая справочная информация.
 */
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <small>
          © {new Date().getFullYear()} Когорта №40 — учебный проект сообщества
          студентов Яндекс Практикума.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
