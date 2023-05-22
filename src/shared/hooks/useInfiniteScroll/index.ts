import { type RefObject, useEffect } from 'react'

export function useInfiniteScroll({
  callback,
  wrapperRef,
  triggerRef,
}: {
  callback: () => void
  wrapperRef: RefObject<HTMLDivElement>
  triggerRef: RefObject<HTMLDivElement>
}) {
  useEffect(() => {
    const triggerElement = triggerRef.current
    const wrapperElement = wrapperRef.current

    if (!callback || !triggerElement || !wrapperElement) {
      return undefined
    }

    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.25,
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback()
      }
    }, options)

    observer.observe(triggerElement)

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement)
      }
    }
  }, [callback, triggerRef.current, wrapperRef.current])
}
