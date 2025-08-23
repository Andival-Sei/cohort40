import { Link } from "react-router-dom";
import styles from "./SectionPage.module.scss";

/**
 * Базовая 404 страница для несуществующих маршрутов.
 */
export default function NotFound() {
  return (
    <main className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Страница не найдена</h1>
        <p>
          Вернуться на <Link to="/">главную</Link>.
        </p>
      </div>
    </main>
  );
}
