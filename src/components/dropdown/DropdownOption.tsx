import { useDropdown } from '@context/useDropdownContext'
import * as React from 'react'

interface IDropdownOptionProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children: React.ReactNode
}

const DropdownOption: React.FunctionComponent<IDropdownOptionProps> = ({ onClick, children }) => {
  const { setIsActive } = useDropdown()
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    onClick(event)
    setIsActive(false)
  }
  return (
    <div
      className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-100 border border-b-2 border-b-[#ddd] dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700"
      onClick={handleClick}
      aria-hidden="true"
    >
      {children}
    </div>
  )
}

export default DropdownOption
