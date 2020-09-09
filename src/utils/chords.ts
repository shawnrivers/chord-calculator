import { Note, NOTES } from './constants';
import { addNoteInterval, getInterval } from './notes';

export type TriadType = 'major' | 'minor' | 'aug' | 'dim' | 'sus2' | 'sus4';

export const triadIntervals: Record<TriadType, [number, number]> = {
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
  const secondNote = addNoteInterval(baseNote, triadIntervals[type][0]);
  const thirdNote = addNoteInterval(secondNote, triadIntervals[type][1]);

  return [baseNote, secondNote, thirdNote];
};

export const getTriadType = (
  notes: [Note, Note, Note]
): TriadType | undefined => {
  const firstInterval = getInterval(notes[0], notes[1], NOTES);
  const secondInterval = getInterval(notes[1], notes[2], NOTES);
  const intervals = [firstInterval, secondInterval];
  const stringifiedIntervals = JSON.stringify(intervals);

  for (const [type, value] of Object.entries(triadIntervals)) {
    if (stringifiedIntervals === JSON.stringify(value)) {
      return type as TriadType;
    }
  }

  return undefined;
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
