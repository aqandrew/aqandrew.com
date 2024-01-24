const DIGITS_TO_LETTERS: Record<string, string> = {
  '0': 'O',
  '1': 'I',
  '2': 'Z',
  '3': 'E',
  '4': 'A',
  '5': 'S',
  '6': 'G',
  '7': 'T',
  '8': 'B',
  '9': 'P',
};

// transition:name doesn't seem to work when slug has digits
//   so, sanitize slug with reverse leetspeak
export function getTransitionName(slug: string) {
  return slug?.replace(/\d/g, (match) => DIGITS_TO_LETTERS[match]);
}
