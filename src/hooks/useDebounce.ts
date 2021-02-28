import { useState } from 'react'

const useDebounce = (func: Function, delay: number): (() => void) => {
  const [prevTime, setPrevTime] = useState(+new Date())

  return (...args: []) => {
    const nowTime = +new Date()
    console.log('prevTime', nowTime - prevTime)
    if (nowTime - prevTime >= delay) {
      setPrevTime(nowTime)
      func(...args)
    }
  }
}

export default useDebounce

// import { useEffect, useState } from 'react'

// const useDebounce = (value: any, delay: number): any => {
//   const [debounceValue, setDebunceValue] = useState(value)

//   useEffect(() => {
//     const timer = setTimeout(() => setDebunceValue(value), delay)
//     return () => clearTimeout(timer)
//   }, [value, delay])

//   return debounceValue
// }

// export default useDebounce
