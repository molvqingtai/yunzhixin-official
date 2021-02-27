/* eslint-disable camelcase */
/* eslint-disable no-var */
/* eslint-disable one-var */
import { useEffect, useState } from 'react'
var useIntersection = function (ref, options) {
  var _a = useState(null),
    intersectionObserverEntry = _a[0],
    setIntersectionObserverEntry = _a[1]
  useEffect(
    function () {
      if (ref.current && typeof IntersectionObserver === 'function') {
        var handler = function (entries) {
          console.log(22222, intersectionObserverEntry)

          // console.log(33333, intersectionObserverEntry) // 过期闭包 null
          setIntersectionObserverEntry(entries[0])
        }
        var observer_1 = new IntersectionObserver(handler, options)
        observer_1.observe(ref.current)
        return function () {
          setIntersectionObserverEntry(null)
          observer_1.disconnect()
        }
      }
      return function () {}
    },
    [ref.current, options.threshold, options.root, options.rootMargin]
  )
  console.log('ref', ref)
  console.log(11111, intersectionObserverEntry)
  // return intersectionObserverEntry
}
export default useIntersection
