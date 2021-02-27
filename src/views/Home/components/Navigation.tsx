import React, {
  useState,
  forwardRef,
  HTMLAttributes,
  useRef,
  useEffect
} from 'react'

import { ReactComponent as Logo } from '/src/assets/images/logo.svg'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: string
}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { children, onClick } = props
    return (
      <button
        ref={ref}
        onClick={onClick}
        className="relative transition ease-out duration-300 flex py-1 px-5 rounded-full focus:outline-none text-white border-2 border-transparent hover:border-theme"
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'

interface ShadowButtonProps extends HTMLAttributes<HTMLButtonElement> {
  rect: ClientRect
}
const ShadowButton = ({ rect }: ShadowButtonProps): JSX.Element => {
  const { width, height, top, left } = rect
  return (
    <button
      style={{ width, height, top, left, backdropFilter: 'blur(10px)' }}
      className="fixed transition-all ease-out duration-700 py-1 px-5 rounded-full cursor-pointer focus:outline-none text-white border-2 border-transparent  bg-theme bg-opacity-50"
    ></button>
  )
}
ShadowButton.displayName = 'ShadowButton'

interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  menus: string[]
  activeIndex?: number
  onToggle?: (activeIndex: number) => void
}

const Navigation = ({
  menus,
  activeIndex = 0,
  onToggle
}: NavigationProps): JSX.Element => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(activeIndex)
  const [activeButtonRect, setActiveButtonRect] = useState({})
  const buttonRefs = useRef<HTMLButtonElement[]>([])
  const handleClick = (index: number): void => {
    setActiveButtonIndex(index)
    onToggle?.(index)
  }

  useEffect(() => {
    const rect = buttonRefs.current
      .find((_, index) => index === activeButtonIndex)!
      .getBoundingClientRect()
    setActiveButtonRect(rect)
  }, [activeButtonIndex])

  useEffect(() => setActiveButtonIndex(activeIndex), [activeIndex])

  return (
    <div
      className="bg-theme bg-opacity-30 h-14 z-20 fixed top-0 w-screen"
      style={{ backdropFilter: 'blur(5px) ' }}
    >
      <div className="container mx-auto h-full flex items-center">
        <div className="text-white">
          <Logo className="w-10"></Logo>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="max-w-5xl w-full flex justify-around">
            <ShadowButton rect={activeButtonRect as ClientRect}></ShadowButton>
            {menus.map((text, index) => (
              <Button
                ref={(element: HTMLButtonElement) =>
                  (buttonRefs.current[index] = element)
                }
                onClick={() => handleClick(index)}
                key={index}
              >
                {text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
