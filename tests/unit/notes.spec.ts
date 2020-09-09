import { Note, NOTES } from '@/utils/constants';
import { addNoteInterval, getInterval } from '@/utils/notes';
import { getScaleNotes } from '@/utils/scales';

describe('addNoteInterval', () => {
  type FuncParameters = Parameters<typeof addNoteInterval>;

  const table: [FuncParameters[0], FuncParameters[1], Note][] = [
    ['C', 4, 'E'],
    ['B', 3, 'D']
  ];

  test.each(table)('%s + %d', (baseNote, noteInterval, expectedNote) => {
    expect(addNoteInterval(baseNote, noteInterval)).toEqual(expectedNote);
  });
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
