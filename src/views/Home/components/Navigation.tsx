import React, { FC, useState, forwardRef, HTMLProps } from 'react'

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { children, isActive, onClick } = props
    const activeClass = isActive ? 'bg-theme' : ''
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={`py-1 px-5 rounded-full cursor-pointer focus:outline-none text-white border-2 border-transparent hover:border-theme ${activeClass}`}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

const ShadowButton: FC = () => {
  return <button></button>
}
ShadowButton.displayName = 'ShadowButton'
interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: string
  isActive: boolean
}

interface NavigationProps extends HTMLProps<HTMLDivElement> {
  menus: string[]
}
const Navigation: FC<NavigationProps> = ({ menus }: NavigationProps) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState()
  // const [activeButtonSize, setActiveButtonSize] = useState({
  //   width: 0,
  //   height: 0
  // })

  const [buttonRefs, setButtonRefs] = useState<HTMLButtonElement[]>([])
  const handleClick = (index: number): void => setActiveButtonIndex(index)

  // useEffect(() => {
  //   const {
  //     offsetWidth: width,
  //     offsetHeight: height
  //   } = activeButtonRef.current!

  //   setActiveButtonSize({ width, height })
  //   console.log(width, height)
  // }, [activeButtonRef])

  return (
    <div
      className="bg-theme bg-opacity-30 h-14 z-10 fixed top-0 w-screen"
      style={{ backdropFilter: 'blur(5px) ' }}
    >
      <div className="container mx-auto h-full flex items-center">
        <div className="text-white">云之信</div>
        <div className="flex flex-1 justify-around">
          <ShadowButton></ShadowButton>
          {menus.map((text, index) => (
            <Button
              ref={(ref: HTMLButtonElement) =>
                setButtonRefs([...buttonRefs, ref])
              }
              isActive={activeButtonIndex === index}
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
