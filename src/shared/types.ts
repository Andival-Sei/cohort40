/**
 * Общие типы данных проекта.
 */
export type Student = {
  /** Уникальный идентификатор в URL */
  slug: string
  /** Имя и фамилия студента */
  name: string
  /** Короткая подпись на карточке */
  tagline: string
  /** Фото (URL) */
  photo: string
  /** Необязательное описание на персональной странице */
  bio: string
  /** Необязательные ссылки (github, tg, др.) */
  links?: { label: string; url: string }[]
}

export type Artifact = {
  id: string
  title: string
  text: string
  image: string
}
