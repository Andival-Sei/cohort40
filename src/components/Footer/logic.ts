export function useFooter() {
  const year = new Date().getFullYear()
  return { year } as const
}
