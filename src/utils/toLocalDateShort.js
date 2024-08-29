export default function toLocalShortDate(date) {
  return new Date(date).toLocaleDateString("fa-IR", {});
}
