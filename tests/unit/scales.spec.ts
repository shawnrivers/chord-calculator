import { Note, Notes, NOTES } from '@/utils/constants';
import {
  ChordNumber,
  getChordFromScale,
  getScaleNotes,
  ScaleType,
  TriadChord
} from '@/utils/scales';

describe('getScales', () => {
  const table: [Note, ScaleType, Note[]][] = [
    ['C', 'major', ['C', 'D', 'E', 'F', 'G', 'A', 'B']],
    ['C', 'minor', ['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']]
  ];

  test.each(table)('%s %s scale', (baseNote, scaleType, expectedNotes) => {
    expect(getScaleNotes(baseNote, scaleType)).toEqual(expectedNotes);
  });
});

describe('getChordFromScale', () => {
  const table: [Note, ScaleType, ChordNumber, TriadChord][] = [
    [
      'C',
      'major',
      1,
      {
        notes: ['C', 'E', 'G'],
        symbol: 'C'
      }
    ],
    [
      'C',
      'minor',
      1,
      {
        notes: ['C', 'D#', 'G'],
        symbol: 'Cm'
      }
    ]
  ];

  test.skip.each(table)(
    '%s %s scale %d chord',
    (baseNote, scaleType, number, expectedChord) => {
      expect(getChordFromScale(baseNote, scaleType, number)).toEqual(
        expectedChord
      );
    }
  );
});
