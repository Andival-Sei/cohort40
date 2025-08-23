import Card from "../../components/Card";
import { useArtifacts } from "./logic";
import styles from "../SectionPage.module.scss";

export default function ArtifactsPage() {
  const list = useArtifacts();
  return (
    <main className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>Артефакты</h1>
        <div className={styles.grid}>
          {list.map((a) => (
            <Card key={a.id} title={a.title} text={a.text} image={a.image} />
          ))}
        </div>
      </div>
    </main>
  );
}
