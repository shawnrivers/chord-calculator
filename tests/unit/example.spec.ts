import { shallowMount } from '@vue/test-utils';
import ChordCalculator from '@/components/ChordCalculator.vue';

describe('ChordCalculator.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new title';
    const wrapper = shallowMount(ChordCalculator, {
      propsData: { title }
    });
    expect(wrapper.text()).toMatch(title);
  });
});
