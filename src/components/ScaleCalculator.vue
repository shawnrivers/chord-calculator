<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>Key</h2>
    <div class="chord-settings">
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
      <ul>
        <li v-for="(note, index) in notes" :key="index">{{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Note, Notes, NOTES } from '@/utils/constants';
import { ScaleType, getScales } from '@/utils/scales';

export default Vue.extend({
  name: 'ChordCalculator',
  props: {
    title: String
  },
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
      return getScales(this.homeNote, this.scaleType);
    }
  }
});
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0.5em;
}
a {
  color: #42b983;
}
.chord-settings {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 8px 4px;
  justify-content: center;

  label {
    justify-self: end;
  }
}
</style>
