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

const triadInterval: Record<TriadType, [number, number]> = {
  major: [4, 3],
  minor: [3, 4],
  aug: [4, 4],
  dim: [3, 3],
  sus2: [2, 5],
  sus4: [5, 2]
};

export const getTriadNotes = (baseNote: Key, type: TriadType): Key[] => {
  const baseNoteIndex = KEYS.indexOf(baseNote);
  const secondNoteIndex = (baseNoteIndex + triadInterval[type][0]) % octave;
  const thirdNoteIndex = (secondNoteIndex + triadInterval[type][1]) % octave;

  return [baseNote, KEYS[secondNoteIndex], KEYS[thirdNoteIndex]];
};

export const getTriadSymbol = (baseNote: Key, type: TriadType): string => {
  if (type === 'major') {
    return baseNote;
  }
  if (type === 'minor') {
    return `${baseNote}m`;
  }

  return `${baseNote}${type}`;
};
