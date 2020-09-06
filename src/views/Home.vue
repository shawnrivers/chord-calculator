<template>
  <div class="home">
    <ChordCalculator title="Chord Calculator" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChordCalculator from '@/components/ChordCalculator.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    ChordCalculator
  }
});
</script>
