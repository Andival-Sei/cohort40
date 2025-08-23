import artifacts from "../../shared/artifacts";
import type { Artifact } from "../../shared/types";

export function useArtifacts(): Artifact[] {
  return artifacts;
}
