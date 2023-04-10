export function buildQueryFromObject(
  query: Record<string, string | number | undefined>,
  baseString = ''
): string {
  return baseString.concat(
    Object.keys(query)
      .filter((key) => {
        return !!query[key] && `${query[key]}`.length > 0
      })
      .map((key) => `${key}=${query[key]}`)
      .join('&')
  )
}
