import { Link } from 'react-router-dom'
import { useArtifact } from './logic.ts'
import styles from './artifactDetail.module.scss'

export default function ArtifactDetailPage() {
  const artifact = useArtifact()

  if (!artifact) {
    return (
      <main id="main" className={styles.section}>
        <div className="container">
          <h1 className={styles.title}>Артефакт не найден</h1>
          <p>
            Возможно, карточка ещё не добавлена. Вернуться в
            <Link to="/artifacts"> раздел артефактов</Link>.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main id="main" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <section className={styles.mediaCard} aria-labelledby="artifact-title">
          <div className={styles.mediaWrap}>
            <img className={styles.media} src={artifact.image} alt={artifact.title} />
          </div>
          <div className={styles.cardBody}>
            <h1 id="artifact-title" className={styles.title}>
              {artifact.title}
            </h1>
            <p className={styles.tagline}>{artifact.text}</p>
          </div>
        </section>
        <div>
          <h2 className={styles.subTitle}>Описание</h2>
          <p className={styles.muted}>{artifact.desc ?? 'Описание скоро появится.'}</p>
        </div>
      </div>
    </main>
  )
}
