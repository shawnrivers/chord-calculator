<template>
  <div>
    <h1>Chord Calculator</h1>
    <h2>Chord</h2>
    <div class="items">
      <Setting
        label="Base Note"
        :value="baseNote"
        :options="allNotes"
        @change="onChangeBaseNote"
      />
      <Setting
        label="Type"
        :value="type"
        :options="triadTypes"
        @change="onChangeType"
      />
    </div>
    <div>
      <h2>Symbol</h2>
      <p>{{ symbol }}</p>
    </div>
    <div>
      <h2>Notes</h2>
      <ul class="items">
        <li v-for="note in notes" :key="note">{{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Note, Notes, NOTES } from '@/utils/constants';
import { TriadType } from '@/utils/chords';
import Setting from '@/components/Setting.vue';

export default Vue.extend({
  name: 'Chord',
  components: {
    Setting
  },
  data(): {
    allNotes: Notes;
    triadTypes: TriadType[];
    triadSymbol: string;
  } {
    return {
      allNotes: NOTES,
      triadTypes: ['major', 'minor', 'aug', 'dim', 'sus2', 'sus4'],
      triadSymbol: 'C'
    };
  },
  computed: {
    baseNote() {
      return this.$store.getters.chord.baseNote as Note;
    },
    type() {
      return this.$store.getters.chord.type as TriadType;
    },
    notes() {
      return this.$store.getters.chordNotes as Note[];
    },
    symbol() {
      return this.$store.getters.chordSymbol as string;
    }
  },
  methods: {
    onChangeBaseNote(value: Note) {
      this.$store.commit('updateChordBaseNote', value);
    },
    onChangeType(value: TriadType) {
      this.$store.commit('updateChordType', value);
    }
  }
});
</script>
