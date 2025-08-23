import { useParams } from 'react-router-dom'
import artifacts from '../../shared/artifacts'
import type { Artifact } from '../../shared/types'

export function useArtifact(): Artifact | undefined {
  const { id } = useParams<{ id: string }>()
  return artifacts.find((a) => a.id === id)
}
