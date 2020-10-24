<template>
  <div class="setting">
    <label :for="label">{{ `${label}: ` }}</label>
    <select
      :id="label"
      :value="value"
      @change="$emit('change', $event.target.value)"
    >
      <option v-for="option in options" :key="option">{{ option }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

type Value = number | string;

export default Vue.extend({
  name: 'Setting',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String] as PropType<Value>,
      required: true
    },
    options: {
      type: Array as PropType<Value[]>,
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
