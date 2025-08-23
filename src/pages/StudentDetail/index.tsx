import { Link } from 'react-router-dom'
import { useStudent } from './logic'
import styles from './StudentDetail.module.scss'

export default function StudentDetailPage() {
  const student = useStudent()

  if (!student) {
    return (
      <main id="main" className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>Студент не найден</h1>
          <p>
            Возможно, карточка ещё не добавлена. Вернуться на
            <Link to="/students"> страницу студентов</Link>.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main id="main" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <section className={styles.profileCard} aria-labelledby="student-name">
          <div className={styles.avatarWrap}>
            <img className={styles.avatar} src={student.photo} alt={student.name} />
          </div>
          <div className={styles.profileBody}>
            <h1 id="student-name" className={styles.title}>
              {student.name}
            </h1>
            <p className={styles.tagline}>{student.tagline}</p>
          </div>
        </section>
        <div>
          <h2 className={styles.subTitle}>О студенте</h2>
          <p className={styles.muted}>{student.bio ?? 'Описание скоро появится.'}</p>
          {student.links && student.links.length > 0 && (
            <div className={styles.links}>
              {student.links.map((l) => (
                <a
                  key={l.url}
                  className={`btn ${styles.linkBtn}`}
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
  )
}
