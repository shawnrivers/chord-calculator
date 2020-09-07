import { Note, NOTES, OCTAVE } from './constants';

export type TriadType = 'major' | 'minor' | 'aug' | 'dim' | 'sus2' | 'sus4';

const triadIntervals: Record<TriadType, [number, number]> = {
  major: [4, 3],
  minor: [3, 4],
  aug: [4, 4],
  dim: [3, 3],
  sus2: [2, 5],
  sus4: [5, 2]
};

export const getTriadNotes = (
  baseNote: Note,
  type: TriadType
): [Note, Note, Note] => {
  const baseNoteIndex = NOTES.indexOf(baseNote);
  const secondNoteIndex = (baseNoteIndex + triadIntervals[type][0]) % OCTAVE;
  const thirdNoteIndex = (secondNoteIndex + triadIntervals[type][1]) % OCTAVE;

  return [baseNote, NOTES[secondNoteIndex], NOTES[thirdNoteIndex]];
};

export const getTriadSymbol = (baseNote: Note, type: TriadType): string => {
  if (type === 'major') {
    return baseNote;
  }
  if (type === 'minor') {
    return `${baseNote}m`;
  }

  return `${baseNote}${type}`;
};
