
import { mount } from '@vue/test-utils'
import FeedCard from '../src/components/FeedCard.vue'

const factory = (props: any) => mount(FeedCard, { props })

describe('FeedCard', () => {
  it('renders title and summary', () => {
    const wrapper = factory({ item: { id: 1, title: 'Hello', summary: 'World' } })
    expect(wrapper.text()).toContain('Hello')
    expect(wrapper.text()).toContain('World')
  })

  it('renders image when provided', () => {
    const wrapper = factory({ item: { id: 2, title: 'Image', image: 'https://example.com/x.jpg' } })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://example.com/x.jpg')
  })
})
