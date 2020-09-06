<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h2>Chord</h2>
    <div>
      <label for="base-note">Base Note: {{ ' ' }}</label>
      <select id="base-note" v-model="baseNote">
        <option v-for="key in keys" :key="key">{{ key }}</option>
      </select>
    </div>
    <div>
      <label for="triad">Triad: {{ ' ' }}</label>
      <select id="triad" v-model="triadType">
        <option v-for="type in triadTypes" :key="type">{{ type }}</option>
      </select>
    </div>
    <div>
      <h2>Notes</h2>
      <ul>
        <li v-for="note in notes" :key="note">{{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Key, Keys, KEYS, TriadType, getTriads } from '@/utils/chords';

export default Vue.extend({
  name: 'ChordCalculator',
  props: {
    title: String
  },
  data(): {
    keys: Keys;
    baseNote: Key;
    triadTypes: TriadType[];
    triadType: TriadType;
  } {
    return {
      keys: KEYS,
      baseNote: 'C',
      triadTypes: ['major', 'minor', 'aug', 'dim'],
      triadType: 'major'
    };
  },
  computed: {
    notes(): Key[] {
      return getTriads(this.baseNote, this.triadType);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
