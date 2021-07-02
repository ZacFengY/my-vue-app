import { mount } from '@vue/test-utils'
import test from '../src/pages/test.vue'

test('test.vue', async () => {
  const wrapper = mount(test)
  expect(wrapper.html()).toContain('This is test page')
  expect(wrapper.html()).toContain('count of pinia store is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count of pinia store is: 1')
})
