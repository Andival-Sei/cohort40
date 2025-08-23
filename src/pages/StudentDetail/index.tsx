import { Link } from "react-router-dom";
import { useStudent } from "./logic";
import styles from "./StudentDetail.module.scss";

export default function StudentDetailPage() {
  const student = useStudent();

  if (!student) {
    return (
      <main className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>Студент не найден</h1>
          <p>
            Возможно, карточка ещё не добавлена. Вернуться на
            <Link to="/students"> страницу студентов</Link>.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className="card">
          <img className="card__media" src={student.photo} alt="" />
          <div className="card__body">
            <h1 className={`card__title ${styles.title}`}>{student.name}</h1>
            <p className="card__text">{student.tagline}</p>
          </div>
        </div>
        <div>
          <h2 className={styles.subTitle}>О студенте</h2>
          <p className={styles.muted}>
            {student.bio ?? "Описание скоро появится."}
          </p>
          {student.links && student.links.length > 0 && (
            <div className={styles.links}>
              {student.links.map((l) => (
                <a
                  key={l.url}
                  className="btn"
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
