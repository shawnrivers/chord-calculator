<template>
  <div>
    <h1>Scale Calculator</h1>
    <h2>Key</h2>
    <div class="settings">
      <label for="home-note">Home Note: {{ ' ' }}</label>
      <select id="home-note" v-model="homeNote">
        <option v-for="note in allNotes" :key="note">{{ note }}</option>
      </select>
      <label for="type">Type: {{ ' ' }}</label>
      <select id="type" v-model="scaleType">
        <option v-for="type in scaleTypes" :key="type">{{ type }}</option>
      </select>
    </div>
    <div>
      <h2>Notes</h2>
      <ul class="items">
        <li v-for="(note, index) in notes" :key="index">
          <div class="item">
            <span>{{ index + 1 }}</span>
            <span>{{ note }}</span>
          </div>
        </li>
      </ul>
    </div>
    <div>
      <h2>Chords</h2>
      <ul class="items">
        <li v-for="(chord, index) in chords" :key="index">
          <div class="item">
            <span>{{ index + 1 }}</span>
            <span>{{ chord.symbol }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Note, Notes, NOTES } from '@/utils/constants';
import {
  ScaleType,
  getScaleNotes,
  TriadChord,
  numOfScaleNotes,
  getChordFromScale,
  ChordNumber
} from '@/utils/scales';

export default Vue.extend({
  name: 'Scale',
  data(): {
    allNotes: Notes;
    homeNote: Note;
    scaleTypes: ScaleType[];
    scaleType: ScaleType;
  } {
    return {
      allNotes: NOTES,
      homeNote: 'C',
      scaleTypes: ['major', 'minor'],
      scaleType: 'major'
    };
  },
  computed: {
    notes(): Note[] {
      return getScaleNotes(this.homeNote, this.scaleType);
    },
    chords(): TriadChord[] {
      const chords: TriadChord[] = [];

      for (let i = 0; i < numOfScaleNotes; i++) {
        chords.push(
          getChordFromScale(
            this.homeNote,
            this.scaleType,
            (i + 1) as ChordNumber
          )
        );
      }

      return chords;
    }
  }
});
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(7, max-content);
  grid-gap: 4px;
  justify-content: center;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:first-of-type {
    font-size: 0.8rem;
  }
}
</style>
