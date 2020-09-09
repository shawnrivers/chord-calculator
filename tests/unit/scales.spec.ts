import { Note } from '@/utils/constants';
import {
  ChordNumber,
  getChordFromScale,
  getScaleNotes,
  ScaleType,
  TriadChord
} from '@/utils/scales';

describe('getScaleNotes', () => {
  const table: [Note, ScaleType, Note[]][] = [
    ['C', 'major', ['C', 'D', 'E', 'F', 'G', 'A', 'B']],
    ['C', 'minor', ['C', 'D', 'D#', 'F', 'G', 'G#', 'A#']]
  ];

  test.each(table)(
    '%s %s scale notes should be %p',
    (baseNote, scaleType, expectedNotes) => {
      expect(getScaleNotes(baseNote, scaleType)).toEqual(expectedNotes);
    }
  );
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

  test.each(table)(
    '%s %s scale %d chord should be %p',
    (baseNote, scaleType, number, expectedChord) => {
      expect(getChordFromScale(baseNote, scaleType, number)).toEqual(
        expectedChord
      );
    }
  );
});
