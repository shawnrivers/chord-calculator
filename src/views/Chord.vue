<template>
  <div>
    <h1>Chord Calculator</h1>
    <h2>Chord</h2>
    <div class="settings">
      <label for="base-note">Base Note: {{ ' ' }}</label>
      <select id="base-note" v-model="baseNote">
        <option v-for="note in allNotes" :key="note">{{ note }}</option>
      </select>
      <label for="triad">Triad: {{ ' ' }}</label>
      <select id="triad" v-model="triadType">
        <option v-for="type in triadTypes" :key="type">{{ type }}</option>
      </select>
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
import { TriadType, getTriadNotes, getTriadSymbol } from '@/utils/chords';

export default Vue.extend({
  name: 'Chord',
  data(): {
    allNotes: Notes;
    baseNote: Note;
    triadTypes: TriadType[];
    triadType: TriadType;
    triadSymbol: string;
  } {
    return {
      allNotes: NOTES,
      baseNote: 'C',
      triadTypes: ['major', 'minor', 'aug', 'dim', 'sus2', 'sus4'],
      triadType: 'major',
      triadSymbol: 'C'
    };
  },
  computed: {
    notes(): Note[] {
      return getTriadNotes(this.baseNote, this.triadType);
    },
    symbol(): string {
      return getTriadSymbol(this.baseNote, this.triadType);
    }
  }
});
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 4px;
  justify-content: center;
}
</style>
