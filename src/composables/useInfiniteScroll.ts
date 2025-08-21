
import { onMounted, onBeforeUnmount, ref } from 'vue'

export function useInfiniteScroll(callback: () => void) {
  const sentinel = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback()
        }
      })
    }, { rootMargin: '600px' })
    if (sentinel.value) observer.observe(sentinel.value)
  })

  onBeforeUnmount(() => {
    if (observer && sentinel.value) observer.unobserve(sentinel.value)
    observer = null
  })

  return { sentinel }
}
