import type { Artifact } from './types'

/**
 * Учебные и мемные артефакты когорты — не кликабельные карточки.
 */
const artifacts: Artifact[] = [
  {
    id: 'evgen',
    title: 'Промт Симонов',
    text: 'мастер DeepSeek',
    image: '/photo/artifacts/evgen.jpg',
  },
  {
    id: 'poster-2025',
    title: 'Постер когорта 2025',
    text: 'Плакат, который мы сделали на воркшопе дизайна.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=640&auto=format&fit=crop',
  },
  {
    id: 'hoodies',
    title: 'Фирменные худи',
    text: 'Коллекция худи с логотипом когорты.',
    image:
      'https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=640&auto=format&fit=crop',
  },
]

export default artifacts
