import { useParams } from "react-router-dom";
import students from "../../shared/students";
import type { Student } from "../../shared/types";

export function useStudent(): Student | undefined {
  const { slug } = useParams<{ slug: string }>();
  return students.find((s) => s.slug === slug);
}
