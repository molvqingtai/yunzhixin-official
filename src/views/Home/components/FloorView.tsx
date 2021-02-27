import React, { useState, HTMLAttributes, useRef, useEffect } from 'react'
import useIntersection from '/src/hooks/useIntersection'

// import { useIntersection } from 'react-use'
interface FloorViewProps extends HTMLAttributes<HTMLDivElement> {
  image?: string
  color?: string
  children?: JSX.Element | JSX.Element[]
  onInViewport: () => void
}

const FloorView = ({
  image,
  color,
  children,
  className = '',
  style,
  onInViewport
}: FloorViewProps): JSX.Element => {
  const intersectionRef = useRef(null)
  const entry = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  })

  // useEffect(() => {
  //   onInViewport()
  // }, [entry])
  console.log('Entry', entry)

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
export default FloorView
