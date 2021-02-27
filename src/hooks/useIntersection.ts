import { useState, useEffect, RefObject } from 'react'

const useIntersection = (
  ref: RefObject<Element>,
  options: IntersectionObserverInit
): IntersectionObserverEntry | null => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (ref?.current) {
      const observer = new IntersectionObserver(
        ([entire]: IntersectionObserverEntry[]) => setEntry(entire),
        options
      )
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
    // TODO Optimize repeated render
  }, [ref])
  return entry
}

export default useIntersection
