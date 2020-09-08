import { Note, NOTES } from './constants';
import { getScaleNotes, ScaleType } from './scales';

export const addInterval = (
  note: Note,
  interval: number,
  noteList: Note[]
): Note => {
  const baseNoteIndex = noteList.indexOf(note);

  if (baseNoteIndex === -1) {
    throw new Error(
      `The note ${note} is not a member of [${noteList.join(', ')}]`
    );
  }

  const resultNoteIndex = (baseNoteIndex + interval) % noteList.length;

  return noteList[resultNoteIndex];
};

export const addNoteInterval = (note: Note, noteInterval: number): Note => {
  return addInterval(note, noteInterval, NOTES);
};

export const addScaleInterval = (
  note: Note,
  indexInterval: number,
  key: {
    homeNote: Note;
    type: ScaleType;
  }
): Note => {
  const notesInScale = getScaleNotes(key.homeNote, key.type);

  return addInterval(note, indexInterval, notesInScale);
};

export const getInterval = (
  noteA: Note,
  noteB: Note,
  noteList: Note[]
): number => {
  const indexA = noteList.indexOf(noteA);
  const indexB = noteList.indexOf(noteB);

  if (indexA === -1) {
    throw new Error(
      `The note ${noteA} is not a member of [${noteList.join(', ')}]`
    );
  }

  if (indexB === -1) {
    throw new Error(
      `The note ${noteB} is not a member of [${noteList.join(', ')}]`
    );
  }

  if (indexA < indexB) {
    return indexB - indexA;
  } else {
    return indexB - indexA + noteList.length;
  }
};
