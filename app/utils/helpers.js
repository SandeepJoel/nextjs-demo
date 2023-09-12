export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function generateTitle(str) {
  return capitalize(str.split('-').join(' '));
}
