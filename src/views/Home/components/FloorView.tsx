import React, { HTMLAttributes } from 'react'

interface FloorViewProps extends HTMLAttributes<HTMLDivElement> {
  image?: string
  children?: JSX.Element | JSX.Element[]
}

const FloorView = ({
  image,
  children,
  style,
  className = ''
}: FloorViewProps): JSX.Element => {
  return (
    <div
      className="min-w-screen min-h-screen bg-cover"
      style={{
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        backgroundImage: image ? `url(${image})` : 'none',
        ...style
      }}
    >
      <div className={`max-w-7xl ${className}`}>{children}</div>
    </div>
  )
}
export default FloorView
