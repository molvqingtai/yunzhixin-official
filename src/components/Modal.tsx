import React, { MouseEvent } from 'react'
import ReactDOM from 'react-dom'

const CloseButton = ({
  onClick
}: {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className="focus:outline-none absolute -top-3 -right-3 bg-gray-50 rounded-full p-2 cursor-pointer shadow active:bg-gray-200"
    >
      <svg
        className="transform duration-700 ease-in-out hover:rotate-90"
        color="#CE3653"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}

interface ModalProps {
  open: boolean
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
  children: JSX.Element | JSX.Element[]
}

const Modal = ({ open, onClose, children }: ModalProps): JSX.Element | null => {
  return open
    ? ReactDOM.createPortal(
        <div
          onTouchMove={(event) => event.preventDefault()}
          className="fixed top-0 left-0 z-50 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="relative w-4/12">
            <CloseButton onClick={(event) => onClose(event)}></CloseButton>
            <div className="bg-white p-6 rounded-lg overflow-hidden shadow">
              {children}
            </div>
          </div>
        </div>,
        document.body
      )
    : null
}

export default Modal
