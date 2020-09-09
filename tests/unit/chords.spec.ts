import { Note } from '@/utils/constants';
import { TriadType, getTriadNotes } from '@/utils/chords';

describe('getTriadNotes', () => {
  const table: [Note, TriadType, Note[]][] = [
    ['C', 'major', ['C', 'E', 'G']],
    ['C', 'minor', ['C', 'D#', 'G']],
    ['C', 'aug', ['C', 'E', 'G#']],
    ['C', 'dim', ['C', 'D#', 'F#']],
    ['C', 'sus2', ['C', 'D', 'G']],
    ['C', 'sus4', ['C', 'F', 'G']]
  ];

  test.each(table)(
    '%s %s chord should be %p',
    (baseNote, triadType, expectedNotes) => {
      expect(getTriadNotes(baseNote, triadType)).toEqual(expectedNotes);
    }
  );
});
