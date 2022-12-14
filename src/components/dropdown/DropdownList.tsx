import * as React from 'react'

interface IDropdownListProps {
  children: React.ReactNode
  classNameBody?: string
}

const DropdownList: React.FunctionComponent<IDropdownListProps> = ({
  children,
  classNameBody = '',
}) => {
  return (
    <div
      className={`w-full bg-white shadow-sm z-1 border border-solid border-gray-300 dark:bg-slate-700 dark:border-gray-700 ${classNameBody} `}
    >
      {children}
    </div>
  )
}

export default DropdownList
