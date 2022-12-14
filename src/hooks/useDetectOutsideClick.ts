import { useDropdown } from '@context/useDropdownContext'
import React from 'react'

interface useDetectOutsideClickProps {
  elements: React.RefObject<HTMLElement> | null
  initialState?: boolean
}

type returntypes<S> = [S, React.Dispatch<React.SetStateAction<S>>]
const useDetectOutsideClick = ({
  elements,
  initialState = false,
}: useDetectOutsideClickProps): returntypes<typeof initialState> => {
  const { isActive, setIsActive } = useDropdown()
  React.useEffect(() => {
    const listener = (event: Event): void => {
      if (elements?.current === null) {
        return
      }

      if (elements === null || elements.current.contains(event.target as Node)) {
        return
      }

      setIsActive(false)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [elements, isActive, setIsActive])

  return [isActive, setIsActive]
}

export default useDetectOutsideClick
