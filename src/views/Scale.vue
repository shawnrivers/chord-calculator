<template>
  <div>
    <ScaleCalculator title="Scale Calculator" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import ScaleCalculator from '@/components/ScaleCalculator.vue';

export default Vue.extend({
  name: 'Scale',
  components: {
    ScaleCalculator
  }
});
</script>
