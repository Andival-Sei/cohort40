import styles from "./Footer.module.scss";
import { useFooter } from "./logic";

/**
 * Подвал сайта — простая справочная информация.
 */
export default function Footer() {
  const { year } = useFooter();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <small>
          © {year} Когорта №40 — учебный проект сообщества студентов Яндекс
          Практикума.
        </small>
      </div>
    </footer>
  );
}
