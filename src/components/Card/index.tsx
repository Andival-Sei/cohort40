import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import { useCard } from "./logic";

/**
 * Универсальная карточка.
 * - Если передан to — рендерим ссылкой, иначе div.
 */
export type CardProps = {
  title: string;
  text?: string;
  image?: string;
  to?: string;
  desc?: string; // дополнительное описание, например bio студента
};

export default function Card({ title, text, image, to, desc }: CardProps) {
  useCard();
  const content = (
    <>
      {image && (
        <div className={styles.mediaWrap}>
          <img className={styles.media} src={image} alt="" loading="lazy" />
        </div>
      )}
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        {text && <p className={styles.text}>{text}</p>}
        {desc && <p className={styles.desc}>{desc}</p>}
      </div>
    </>
  );

  return to ? (
    <Link to={to} className={styles.card} aria-label={title}>
      {content}
    </Link>
  ) : (
    <div className={styles.card} aria-label={title}>
      {content}
    </div>
  );
}
