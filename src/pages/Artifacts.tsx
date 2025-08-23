import Card from "../components/Card";
import artifacts from "../shared/artifacts";
import styles from "./SectionPage.module.scss";

/**
 * Страница артефактов — карточки не кликабельны.
 */
export default function ArtifactsPage() {
  return (
    <main className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Артефакты</h1>
        <div className={styles.grid}>
          {artifacts.map((a) => (
            <Card key={a.id} title={a.title} text={a.text} image={a.image} />
          ))}
        </div>
      </div>
    </main>
  );
}
