/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'

interface IModalUpdateProps {
  title: string
  children: React.ReactNode
}

const ModalUpdate: React.FunctionComponent<IModalUpdateProps> = ({ title, children }) => {
  return (
    <div className="form-update">
      <h2 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-primary">{title}</h2>
      {children}
    </div>
  )
}

export default ModalUpdate
