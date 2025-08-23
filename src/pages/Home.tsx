import Card from "../components/Card";
import students from "../shared/students.ts";
import artifacts from "../shared/artifacts.ts";
import type { Student, Artifact } from "../shared/types";
import styles from "./Home.module.scss";

/**
 * Главная страница: геро-секция, список студентов, список артефактов.
 */
export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>Когорта №40</h1>
          <p className={styles.heroSubtitle}>
            Учебный сайт-визитка студентов Яндекс Практикума. Мы практикуемся,
            помогаем друг другу и оставляем след в коде — вместе.
          </p>
        </div>
      </section>

      {/* Students */}
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

      {/* Artifacts */}
      <section className={styles.section} id="artifacts">
        <div className="container">
          <h2 className={styles.sectionTitle}>Артефакты</h2>
          <div className={styles.grid}>
            {artifacts.map((a: Artifact) => (
              <Card key={a.id} title={a.title} text={a.text} image={a.image} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
