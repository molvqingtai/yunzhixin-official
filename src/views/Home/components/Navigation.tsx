import React, { FC, useState, forwardRef, useEffect, useRef } from 'react'

const ShadowButton = forwardRef<HTMLButtonElement>((props, ref) => {
  return <button {...props} ref={ref}></button>
})
ShadowButton.displayName = 'ShadowButton'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  isActive: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  isActive,
  ...props
}: ButtonProps) => {
  const activeClass = isActive ? 'bg-theme' : ''
  return (
    <button
      {...props}
      className={`py-1 px-5 rounded-full cursor-pointer focus:outline-none text-white border-2 border-transparent hover:border-theme ${activeClass}`}
    >
      {children}
    </button>
  )
}

interface NavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  menu: string[]
}
const Navigation: FC<NavigationProps> = ({ menu }: NavigationProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const shadowButtonRef = useRef(null)

  const handleClick = (index: number): void => setActiveIndex(index)

  useEffect(() => {
    console.log(shadowButtonRef)
  })

  return (
    <div
      className="bg-theme bg-opacity-30 h-14 z-10 fixed top-0 w-screen"
      style={{ backdropFilter: 'blur(5px) ' }}
    >
      <div className="container mx-auto h-full flex items-center">
        <div className="text-white">云之信</div>
        <div className="flex flex-1 justify-around">
          <ShadowButton ref={shadowButtonRef}></ShadowButton>
          {menu.map((text, index) => (
            <Button
              isActive={activeIndex === index}
              onClick={() => handleClick(index)}
              key={index}
            >
              {text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Navigation
