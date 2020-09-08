import { Note, NOTES } from '@/utils/constants';
import { TriadType, getTriadNotes } from '@/utils/chords';
import { addNoteInterval, addScaleInterval, getInterval } from '@/utils/notes';
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

describe('addScaleInterval', () => {
  type FuncParameters = Parameters<typeof addScaleInterval>;

  const table: [
    FuncParameters[0],
    FuncParameters[1],
    FuncParameters[2],
    Note
  ][] = [
    [
      'C',
      2,
      {
        homeNote: 'C',
        type: 'major'
      },
      'E'
    ],
    [
      'A#',
      2,
      {
        homeNote: 'C',
        type: 'minor'
      },
      'D'
    ]
  ];

  test.each(table)(
    '%s + %d in %o should be %s',
    (baseNote, indexInterval, key, expectedNote) => {
      expect(addScaleInterval(baseNote, indexInterval, key)).toEqual(
        expectedNote
      );
    }
  );

  it('Passing base note out of the scale should throw an Error', () => {
    expect(() => {
      addScaleInterval('C#', 2, {
        homeNote: 'C',
        type: 'major'
      });
    }).toThrow();
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
