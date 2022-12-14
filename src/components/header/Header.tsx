import * as React from 'react'

interface IHeaderProps {
  children?: React.ReactNode
  border?: boolean
  shadow?: boolean
  className?: string
  height?: string
}

const Header: React.FunctionComponent<IHeaderProps> = ({
  children,
  border = true,
  shadow = true,
  height = '94px',
  className,
}) => {
  return (
    <header
      className={`p-5 flex justify-between items-center gap-x-5 flex-wrap relative dark:bg-slate-800
      ${border ? ' border-b-2 border-b-[#eee] dark:border-slate-400' : ''}
      ${shadow ? 'shadow-sm' : ''} ${className !== undefined ? className : ''}`}
      style={{ height }}
    >
      {children}
    </header>
  )
}

export default Header
