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

export type TriadType = 'major' | 'minor' | 'aug' | 'dim' | 'sus2' | 'sus4';

export const getTriads = (baseNote: Key, type: TriadType): Key[] => {
  const baseIndex = KEYS.indexOf(baseNote);
  let secondNote: Key;
  let thirdNote: Key;

  switch (type) {
    case 'major':
      secondNote = KEYS[(baseIndex + 4) % octave];
      thirdNote = KEYS[(baseIndex + 7) % octave];
      break;
    case 'minor':
      secondNote = KEYS[(baseIndex + 3) % octave];
      thirdNote = KEYS[(baseIndex + 7) % octave];
      break;
    case 'aug':
      secondNote = KEYS[(baseIndex + 4) % octave];
      thirdNote = KEYS[(baseIndex + 8) % octave];
      break;
    case 'dim':
      secondNote = KEYS[(baseIndex + 3) % octave];
      thirdNote = KEYS[(baseIndex + 6) % octave];
      break;
    case 'sus2':
      secondNote = KEYS[(baseIndex + 2) % octave];
      thirdNote = KEYS[(baseIndex + 7) % octave];
      break;
    case 'sus4':
      secondNote = KEYS[(baseIndex + 5) % octave];
      thirdNote = KEYS[(baseIndex + 7) % octave];
      break;
  }

  return [baseNote, secondNote, thirdNote];
};
