import { getTriadSymbol, getTriadType, triadIntervals } from './chords';
import { Note, NOTES, OCTAVE } from './constants';
import { addInterval, addNoteInterval, getInterval } from './notes';

export type ScaleType = 'major' | 'minor';

export const numOfScaleNotes = 7;

const scaleIntervals: Record<ScaleType, number[]> = {
  major: [2, 2, 1, 2, 2, 2, 1],
  minor: [2, 1, 2, 2, 1, 2, 2]
};

const accumulatedIntervals: Record<ScaleType, number[]> = {
  major: scaleIntervals.major.map((_, index) =>
    scaleIntervals.major.slice(0, index + 1).reduce((acc, curr) => acc + curr)
  ),
  minor: scaleIntervals.minor.map((_, index) =>
    scaleIntervals.minor.slice(0, index + 1).reduce((acc, curr) => acc + curr)
  )
};

export const getScaleNotes = (homeNote: Note, type: ScaleType): Note[] => {
  const notes: Note[] = [homeNote];
  const intervals = scaleIntervals[type];

  for (let i = 0; i < scaleIntervals.major.length - 1; i++) {
    const prevNote = notes[i];
    notes.push(addNoteInterval(prevNote, intervals[i]));
  }

  return notes;
};

export type TriadChord = {
  notes: [Note, Note, Note];
  symbol: string;
};

export type ChordNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const getChordFromScale = (
  homeNote: Note,
  type: ScaleType,
  number: ChordNumber
): TriadChord => {
  const scaleNotes = getScaleNotes(homeNote, type);
  const firstNoteIndex = number - 1;
  const firstNote = scaleNotes[firstNoteIndex];
  const secondNote = addInterval(firstNote, 2, scaleNotes);
  const thirdNote = addInterval(secondNote, 2, scaleNotes);
  const notes: [Note, Note, Note] = [firstNote, secondNote, thirdNote];

  const triadType = getTriadType(notes);
  const symbol = triadType ? getTriadSymbol(firstNote, triadType) : '';

  return {
    notes,
    symbol
  };
};
