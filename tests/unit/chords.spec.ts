import { Key, Keys, KEYS, TriadType, getTriadNotes } from '@/utils/chords';

describe('getTriadNotes', () => {
  const table: [Key, TriadType, Key[]][] = [
    ['C', 'major', ['C', 'E', 'G']],
    ['C', 'minor', ['C', 'D#', 'G']],
    ['C', 'aug', ['C', 'E', 'G#']],
    ['C', 'dim', ['C', 'D#', 'F#']],
    ['C', 'sus2', ['C', 'D', 'G']],
    ['C', 'sus4', ['C', 'F', 'G']]
  ];

  test.each(table)('%s %s', (baseNote, triadType, expectedNotes) => {
    expect(getTriadNotes(baseNote, triadType)).toEqual(expectedNotes);
  });
});
