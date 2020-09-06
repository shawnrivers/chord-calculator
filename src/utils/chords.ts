export type Key =
  | 'C'
  | 'C#'
  | 'D'
  | 'D#'
  | 'E'
  | 'F'
  | 'F#'
  | 'G'
  | 'G#'
  | 'A'
  | 'A#'
  | 'B';

export type Keys = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B'
];

export const KEYS: Keys = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B'
];

const octave = KEYS.length;

export const getNotes = (baseNote: Key, major: boolean): Key[] => {
  const baseIndex = KEYS.indexOf(baseNote);
  let secondNote: Key;
  const thirdNote = KEYS[(baseIndex + 7) % octave];

  if (major) {
    secondNote = KEYS[(baseIndex + 4) % octave];
  } else {
    secondNote = KEYS[(baseIndex + 3) % octave];
  }

  return [baseNote, secondNote, thirdNote];
};
