import * as React from 'react'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string
  children?: React.ReactNode
  height?: string
  onClick?: () => void
  radius?: string
  width?: string
  type: 'button' | 'submit'
  className?: string
  style?: React.CSSProperties
}

const Button: React.FunctionComponent<IButtonProps> = ({
  color,
  children,
  height = 'auto',
  onClick,
  radius,
  width = 'auto',
  type = 'button',
  className = `text-white text-base px-5 py-2 border-none rounded-md bg-primary hover:bg-primary-dark focus:outline-none min-w-[150px]`,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: color,
        height,
        width,
        borderRadius: radius,
        ...style,
      }}
      type={type === 'button' ? 'button' : 'submit'}
    >
      {children}
    </button>
  )
}

export default Button
