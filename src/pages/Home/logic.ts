import students from '../../shared/students'
import artifacts from '../../shared/artifacts'
import type { Student, Artifact } from '../../shared/types'

/** Возвращает данные для главной страницы. */
export function useHomeData(): { students: Student[]; artifacts: Artifact[] } {
  // Здесь можно будет добавить сортировки/фильтры/запросы
  return { students, artifacts }
}
