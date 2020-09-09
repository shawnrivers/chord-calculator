import { Note, NOTES } from '@/utils/constants';
import { addInterval, addNoteInterval, getInterval } from '@/utils/notes';
import { getScaleNotes } from '@/utils/scales';

describe('addInterval', () => {
  type FuncParameters = Parameters<typeof addInterval>;

  const table: [
    FuncParameters[0],
    FuncParameters[1],
    FuncParameters[2],
    Note
  ][] = [
    ['C', 4, NOTES, 'E'],
    ['B', 3, NOTES, 'D'],
    ['C', 3, getScaleNotes('F', 'major'), 'F'],
    ['B', 4, getScaleNotes('A', 'major'), 'F#']
  ];

  test.each(table)(
    '%s + %d in %p should be %s',
    (note, interval, noteList, expectedNote) => {
      expect(addInterval(note, interval, noteList)).toEqual(expectedNote);
    }
  );

  it('Passing note out of the note list should throw an Error', () => {
    expect(() => {
      addInterval('C#', 4, getScaleNotes('C', 'minor'));
    }).toThrow();
  });
});

describe('addNoteInterval', () => {
  type FuncParameters = Parameters<typeof addNoteInterval>;

  const table: [FuncParameters[0], FuncParameters[1], Note][] = [
    ['C', 4, 'E'],
    ['B', 3, 'D']
  ];

  test.each(table)(
    '%s + %d should be %s',
    (baseNote, noteInterval, expectedNote) => {
      expect(addNoteInterval(baseNote, noteInterval)).toEqual(expectedNote);
    }
  );
});

describe('getInterval', () => {
  type FuncParameters = Parameters<typeof getInterval>;

  const table: [
    FuncParameters[0],
    FuncParameters[1],
    FuncParameters[2],
    number
  ][] = [
    ['C', 'E', NOTES, 4],
    ['A#', 'C#', NOTES, 3]
  ];

  test.each(table)(
    'Interval from %s -> %s in %p should be %d',
    (noteA, noteB, noteList, expectedInterval) => {
      expect(getInterval(noteA, noteB, noteList)).toEqual(expectedInterval);
    }
  );

  it('Passing note out of the note list should throw an Error', () => {
    expect(() => {
      getInterval('C#', 'E', getScaleNotes('C', 'major'));
    }).toThrow();
  });
});
