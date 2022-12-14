import * as React from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

interface IModalProps {
  children: React.ReactNode
  open: boolean
  handleClose: () => void
}
const modalRoot = document.querySelector('#modal-root') as HTMLElement
const OverlayRoot: React.FC<IModalProps> = ({ children, open, handleClose }) => {
  const nodeRef = React.useRef<HTMLDivElement | null>(null)
  return (
    <CSSTransition nodeRef={nodeRef} in={open} timeout={300} classNames="zoom" unmountOnExit>
      <div
        ref={nodeRef}
        className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal `}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-25 overlay hover:cursor-pointer"
          onClick={handleClose}
          aria-hidden="true"
        />
        <div className="relative z-10 w-full max-w-[600px] bg-white dark:bg-slate-800 rounded-lg shadow-lg p-5 modal-content">
          {children}
        </div>
      </div>
    </CSSTransition>
  )
}

const Modal: React.FunctionComponent<IModalProps> = ({ children, open, handleClose }) => {
  const elRef = React.useRef<HTMLDivElement | null>(null)
  if (elRef.current === null) elRef.current = document.createElement('div')

  React.useEffect(() => {
    const el = elRef.current // non-null assertion because it will never be null
    modalRoot.appendChild(el as HTMLDivElement)
    return () => {
      modalRoot.removeChild(el as HTMLDivElement)
    }
  }, [open])

  return createPortal(OverlayRoot({ children, open, handleClose }), elRef.current)
}

export default Modal
