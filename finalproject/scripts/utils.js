
export function capitalizeWords(text) {

  return text.replace(/\\b\\w/g, letter => letter.toUpperCase());
}
