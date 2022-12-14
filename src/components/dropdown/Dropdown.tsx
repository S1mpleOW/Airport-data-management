/* eslint-disable react/display-name */
import { useDropdown } from '@context/useDropdownContext'
import * as React from 'react'

interface Props {
  children?: React.ReactNode
}
export type Ref = HTMLDivElement

const Dropdown = React.forwardRef<Ref, Props>((props, ref) => {
  const { isActive } = useDropdown()
  return (
    <div
      className={`z-50 inline-block absolute right-3 overflow-hidden origin-top-right top-[80px] w-[150px] shadow-lg rounded-lg transition-all duration-300 ease-in-out -translate-y-5 ${
        isActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible'
      }`}
      ref={ref}
    >
      {props.children}
    </div>
  )
})

export default Dropdown
