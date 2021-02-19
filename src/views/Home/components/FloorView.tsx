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
      className={`w-screen h-screen bg-cover ${className}`}
      style={{
        backgroundImage: image ? `url(${image})` : 'none',
        ...style
      }}
    >
      {children}
    </div>
  )
}
export default FloorView
