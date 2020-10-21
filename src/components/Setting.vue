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
  display: flex;

  & > *:not(:last-child) {
    margin-right: 0.5em;
  }
}
</style>
