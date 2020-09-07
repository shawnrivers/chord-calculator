import { Note, Notes, NOTES } from '@/utils/constants';
import { getScales, ScaleType } from '@/utils/scales';

describe('getScales', () => {
  const table: [Note, ScaleType, Note[]][] = [
    ['C', 'major', ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']],
    ['C', 'minor', ['C', 'D', 'D#', 'F', 'G', 'G#', 'A#', 'C']]
  ];

  test.each(table)('%s %s scale', (baseNote, scaleType, expectedNotes) => {
    expect(getScales(baseNote, scaleType)).toEqual(expectedNotes);
  });
});
