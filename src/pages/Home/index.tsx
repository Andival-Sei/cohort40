import Card from '../../components/Card'
import { useHomeData } from './logic'
import styles from './Home.module.scss'
import type { Student, Artifact } from '../../shared/types'

/** Главная страница: геро-секция, список студентов, артефактов. */
export default function Home() {
  const { students, artifacts } = useHomeData()
  return (
    <main id="main">
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Когорта №40</h1>
          <p className={styles.heroSubtitle}>
            Учебный сайт-визитка студентов Яндекс Практикума. Мы практикуемся, помогаем друг другу и
            оставляем след в коде — вместе.
          </p>
        </div>
      </section>

      <section className={styles.section} id="students">
        <div className="container">
          <h2 className={styles.sectionTitle}>Студенты</h2>
          <div className={styles.studentsGrid}>
            {students.map((s: Student) => (
              <Card
                key={s.slug}
                title={s.name}
                text={s.tagline}
                image={s.photo}
                desc={s.bio}
                to={`/students/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="artifacts">
        <div className="container">
          <h2 className={styles.sectionTitle}>Артефакты</h2>
          <div className={styles.grid}>
            {artifacts.map((a: Artifact) => (
              <Card
                key={a.id}
                title={a.title}
                text={a.text}
                image={a.image}
                to={`/artifacts/${a.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} id="instructions">
        <div className="container">
          <h2 className={styles.sectionTitle}>Инструкции</h2>
          <p className={styles.sectionDescription}>
            Узнайте, как добавить себя в проект или поделиться своими артефактами
          </p>
          <div className={styles.instructionsLink}>
            <a href="/instructions" className={styles.instructionsButton}>
              Открыть инструкции
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
