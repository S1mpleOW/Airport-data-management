import * as React from 'react'
import styles from './loading.module.css'

interface ILoadingProps {
  className?: string
  width?: number | string
  height?: number | string
  isLoading?: boolean
}

const Loading: React.FunctionComponent<ILoadingProps> = ({
  className = '',
  width = '50px',
  height = '50px',
  isLoading = true,
}) => {
  return (
    <div
      className={`${styles['dashed-loading']} ${className}`}
      style={{
        width,
        height,
        display: isLoading ? 'block' : 'none',
      }}
    />
  )
}

export default Loading
