import React from 'react'

interface BannerProps {
  src: string
  children?: JSX.Element | JSX.Element[]
}

const Banner = ({ src, children }: BannerProps): JSX.Element => {
  return (
    <div
      className="w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(${src})` }}
    >
      {children}
    </div>
  )
}
export default Banner
