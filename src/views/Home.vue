<template>
  <div class="home">
    <ChordsCalculator title="Chord Calculator" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChordsCalculator from '@/components/ChordsCalculator.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    ChordsCalculator
  }
});
</script>
