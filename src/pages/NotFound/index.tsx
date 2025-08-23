import { Link } from 'react-router-dom'
import { useNotFoundMessage } from './logic'
import styles from '../SectionPage.module.scss'

export default function NotFound() {
  const message = useNotFoundMessage()
  return (
    <main id="main" className={styles.section}>
      <div className="container">
        <h1 className={styles.title}>{message}</h1>
        <p>
          Вернуться на <Link to="/">главную</Link>.
        </p>
      </div>
    </main>
  )
}
