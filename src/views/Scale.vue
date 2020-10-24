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
import { ScaleType, TriadChord } from '@/utils/scales';
import Setting from '@/components/Setting.vue';

export default Vue.extend({
  name: 'Scale',
  components: {
    Setting
  },
  data(): {
    allNotes: Notes;
    scaleTypes: ScaleType[];
  } {
    return {
      allNotes: NOTES,
      scaleTypes: ['major', 'minor']
    };
  },
  computed: {
    homeNote() {
      return this.$store.getters.scale.homeNote as Note;
    },
    scaleType() {
      return this.$store.getters.scale.type as ScaleType;
    },
    notes() {
      return this.$store.getters.scaleNotes as Note[];
    },
    chords() {
      return this.$store.getters.scaleChords as TriadChord[];
    }
  },
  methods: {
    onChangeHomeNote(value: Note) {
      this.$store.commit('updateScaleHomeNote', value);
    },
    onChangeType(value: ScaleType) {
      this.$store.commit('updateScaleType', value);
    }
  }
});
</script>
