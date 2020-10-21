<template>
  <div class="setting">
    <label :for="label">{{ `${label}: ` }}</label>
    <select :id="label" @change="$emit('change', $event.target.value)">
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Setting',
  props: {
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.setting {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 0.2em 0.4em;
  justify-content: center;

  label {
    justify-self: end;
    align-self: center;
  }

  select {
    justify-self: start;
    align-self: center;
  }
}
</style>
