import React, { FC, useState } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  isActive: boolean
}

const Button: FC<ButtonProps> = ({
  children,
  isActive,
  ...rest
}: ButtonProps) => {
  const activeClass = isActive ? 'bg-theme' : ''
  return (
    <button
      {...rest}
      className={`py-1 px-5 rounded-full cursor-pointer focus:outline-none text-white border-2 border-transparent hover:border-theme ${activeClass}`}
    >
      {children}
    </button>
  )
}

// const ButtonShadow: FC = () => {}

const Navigation: FC = () => {
  const buttonTextList = ['产品', '案例', '关于我们']
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index: number): void => setActiveIndex(index)

  return (
    <div
      className="bg-theme bg-opacity-30 h-14 z-10 fixed top-0 w-screen"
      style={{ backdropFilter: 'blur(5px) ' }}
    >
      <div className="container mx-auto h-full flex items-center">
        <div className="text-white">云之信</div>
        <div className="flex flex-1 justify-around">
          {buttonTextList.map((text, index) => (
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
