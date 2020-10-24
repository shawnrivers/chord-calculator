import { getTriadNotes, getTriadSymbol, TriadType } from '@/utils/chords';
import { Note } from '@/utils/constants';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

type GlobalState = {
  chord: {
    baseNote: Note;
    type: TriadType;
  };
};

export default new Vuex.Store<GlobalState>({
  state: {
    chord: {
      baseNote: 'C',
      type: 'major'
    }
  },
  getters: {
    chord: state => state.chord,
    chordNotes: ({ chord }) => getTriadNotes(chord.baseNote, chord.type),
    chordSymbol: ({ chord }) => getTriadSymbol(chord.baseNote, chord.type)
  },
  mutations: {
    updateChordBaseNote: (state, note: Note) => {
      state.chord.baseNote = note;
    },
    updateChordType: (state, type: TriadType) => {
      state.chord.type = type;
    }
  }
});
