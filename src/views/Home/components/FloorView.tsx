import React, { HTMLAttributes } from 'react'

interface FloorViewProps extends HTMLAttributes<HTMLDivElement> {
  image?: string
  color?: string
  children?: JSX.Element | JSX.Element[]
}

const FloorView = ({
  image,
  color,
  children,
  className = '',
  style
}: FloorViewProps): JSX.Element => {
  return (
    <div
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
