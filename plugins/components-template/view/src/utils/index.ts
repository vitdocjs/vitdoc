export function toName(name: string | undefined) {
  if (!name) {
    return null;
  }
  return name
    .replace(/-/g, " ")
    .replace(/\//g, " - ")
    .replace(/^[a-z] /, "")
    .replace(/^./, (s) => s.toUpperCase())
    .replace(/ \w/g, (s) => s.toUpperCase());
}
