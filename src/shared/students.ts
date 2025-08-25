import type { Student } from './types'

/**
 * Список студентов.
 * В реальности пополняется через PR: каждый добавляет объект со своей карточкой.
 */
const students: Student[] = [
  {
    slug: 'kir-bari',
    name: 'Кир Бари',
    tagline: 'Frontend',
    photo: '/photo/students/kir.jpg',
    bio: 'Чиловый парень',
    links: [
      { label: 'GitHub', url: 'https://github.com/Andival-Sei' },
      { label: 'Telegram', url: 'https://t.me/Andiewahl' },
    ],
  },
  {
    slug: 'Triganus',
    name: 'Pavel Bosy',
    tagline: 'Frontend',
    photo: '/photo/students/pavel.jpg',
    bio: 'Люблю чистый код и удобные интерфейсы. Учусь и делаю pet-проекты.',
    links: [
      { label: 'GitHub', url: 'https://github.com/Triganus' },
      { label: 'Telegram', url: 'https://t.me/Triganusnikus2312' },
    ],
  },
]

export default students
