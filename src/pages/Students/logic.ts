import students from '../../shared/students'
import type { Student } from '../../shared/types'

/** Хук-обертка для списка студентов (фильтры/сортировка в будущем). */
export function useStudents(): Student[] {
  return students
}
