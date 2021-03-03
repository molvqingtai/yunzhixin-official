import React, {
  useImperativeHandle,
  forwardRef,
  HTMLAttributes,
  useRef,
  useEffect
} from 'react'
import useIntersection from '../../../hooks/useIntersection'

// import { useIntersection } from 'react-use'
interface FloorViewProps extends HTMLAttributes<HTMLDivElement> {
  image?: string
  color?: string
  children?: JSX.Element | JSX.Element[]
  onInViewport?: () => void
}

const FloorView = forwardRef<Partial<HTMLDivElement>, FloorViewProps>(
  (
    {
      image,
      color,
      children,
      className = '',
      style,
      onInViewport
    }: FloorViewProps,
    ref
  ) => {
    const intersectionRef = useRef<HTMLDivElement>(null)
    useImperativeHandle(ref, () => ({
      scrollIntoView: (arg: boolean | ScrollIntoViewOptions) => {
        intersectionRef?.current?.scrollIntoView?.(arg)
      }
    }))
    const entry = useIntersection(intersectionRef, {
      root: null,
      rootMargin: '100px 0px 0px 0px',
      threshold: 0
    })

    useEffect(() => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (entry?.isIntersecting) {
        onInViewport?.()
      }
    }, [entry])
    // console.log('Entry', entry)

    return (
      <div
        ref={intersectionRef}
        className="min-w-screen min-h-screen bg-cover flex justify-center"
        style={{
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          backgroundImage: image ? `url(${image})` : 'none',
          backgroundColor: color ?? 'none'
        }}
      >
        <div className={`max-w-7xl w-full ${className}`} style={style}>
          {children}
        </div>
      </div>
    )
  }
)

export default FloorView
