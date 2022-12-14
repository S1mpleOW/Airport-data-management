import { useDropdown } from '@context/useDropdownContext'
import * as React from 'react'

interface IDropdownSelectProps {
  placeholder?: string
}

const DropdownSelect: React.FunctionComponent<IDropdownSelectProps> = ({
  placeholder = 'Please select an option',
}) => {
  const { isActive, handleToggleDropdown } = useDropdown()
  return (
    <div
      className={`flex items-center justify-between p-5 bg-[#E7ECF3] cursor-pointer font-medium ${
        isActive ? `rounded-[10px] rounded-b-none` : `rounded-[10px]`
      }`}
      onClick={handleToggleDropdown}
      aria-hidden="true"
    >
      <span>{placeholder}</span>
      <span>
        {isActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </span>
    </div>
  )
}

export default DropdownSelect
