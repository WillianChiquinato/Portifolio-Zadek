import { ref, onMounted, type Ref } from 'vue'

export function useIntersection(target: Ref<HTMLElement | null>, options?: IntersectionObserverInit) {
  const isVisible = ref(false)

  onMounted(() => {
    if (!target.value) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(target.value)
  })

  return isVisible
}