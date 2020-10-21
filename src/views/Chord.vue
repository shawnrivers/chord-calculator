<template>
  <div>
    <h1>Chord Calculator</h1>
    <h2>Chord</h2>
    <div class="items">
      <Setting
        label="Base Note"
        :options="allNotes"
        @change="onChangeBaseNote"
      />
      <Setting label="Type" :options="triadTypes" @change="onChangeType" />
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
import Setting from '@/components/Setting.vue';

export default Vue.extend({
  name: 'Chord',
  components: {
    Setting
  },
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
  },
  methods: {
    onChangeBaseNote(value: Note) {
      this.baseNote = value;
    },
    onChangeType(value: TriadType) {
      this.triadType = value;
    }
  }
});
</script>
