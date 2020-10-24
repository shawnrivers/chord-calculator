import { getTriadNotes, getTriadSymbol, TriadType } from '@/utils/chords';
import { Note } from '@/utils/constants';
import {
  ChordNumber,
  getChordFromScale,
  getScaleNotes,
  numOfScaleNotes,
  ScaleType,
  TriadChord
} from '@/utils/scales';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

type GlobalState = {
  chord: {
    baseNote: Note;
    type: TriadType;
  };
  scale: {
    homeNote: Note;
    type: ScaleType;
  };
};

export default new Vuex.Store<GlobalState>({
  state: {
    chord: {
      baseNote: 'C',
      type: 'major'
    },
    scale: {
      homeNote: 'C',
      type: 'major'
    }
  },
  getters: {
    chord: state => state.chord,
    chordNotes: ({ chord }) => getTriadNotes(chord.baseNote, chord.type),
    chordSymbol: ({ chord }) => getTriadSymbol(chord.baseNote, chord.type),
    scale: state => state.scale,
    scaleNotes: ({ scale }) => getScaleNotes(scale.homeNote, scale.type),
    scaleChords: ({ scale }) => {
      const chords: TriadChord[] = [];

      for (let i = 0; i < numOfScaleNotes; i++) {
        chords.push(
          getChordFromScale(scale.homeNote, scale.type, (i + 1) as ChordNumber)
        );
      }

      return chords;
    }
  },
  mutations: {
    updateChordBaseNote: (state, note: Note) => {
      state.chord.baseNote = note;
    },
    updateChordType: (state, type: TriadType) => {
      state.chord.type = type;
    },
    updateScaleHomeNote: (state, note: Note) => {
      state.scale.homeNote = note;
    },
    updateScaleType: (state, type: ScaleType) => {
      state.scale.type = type;
    }
  }
});
