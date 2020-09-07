import { Note, NOTES, OCTAVE } from './constants';

export type ScaleType = 'major' | 'minor';

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

export const getScales = (homeNote: Note, type: ScaleType): Note[] => {
  const startIndex = NOTES.indexOf(homeNote);

  return [
    homeNote,
    ...accumulatedIntervals[type].map(
      interval => NOTES[(startIndex + interval) % OCTAVE]
    )
  ];
};
