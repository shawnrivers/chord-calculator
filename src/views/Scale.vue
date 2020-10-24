<template>
  <div>
    <h1>Scale Calculator</h1>
    <h2>Key</h2>
    <div class="items">
      <Setting
        label="Home Note"
        :value="homeNote"
        :options="allNotes"
        @change="onChangeHomeNote"
      />
      <Setting
        label="Type"
        :value="scaleType"
        :options="scaleTypes"
        @change="onChangeType"
      />
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
import Setting from '@/components/Setting.vue';

export default Vue.extend({
  name: 'Scale',
  components: {
    Setting
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
  },
  methods: {
    onChangeHomeNote(value: Note) {
      this.homeNote = value;
    },
    onChangeType(value: ScaleType) {
      this.scaleType = value;
    }
  }
});
</script>
