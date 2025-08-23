import Card from "../../components/Card";
import { useStudents } from "./logic";
import styles from "../SectionPage.module.scss";

export default function StudentsPage() {
  const students = useStudents();
  return (
    <main className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Студенты</h1>
        <div className={styles.grid}>
          {students.map((s) => (
            <Card
              key={s.slug}
              title={s.name}
              text={s.tagline}
              image={s.photo}
              to={`/students/${s.slug}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
