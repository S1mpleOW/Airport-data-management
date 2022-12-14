/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import { useController, Control, FieldValues } from 'react-hook-form'

interface IInputProps {
  name: string
  id?: string
  control: Control<FieldValues>
  type: string
  placeholder: string
  children?: React.ReactNode
}

const Input: React.FunctionComponent<IInputProps> = ({
  name,
  control,
  id,
  type = 'text',
  placeholder,
  children,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: '',
  })

  return (
    <>
      <input
        type={type}
        id={id !== undefined ? id : name}
        className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg border-2 focus:border-primary focus:ring-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary transition-all duration-300 ease-linear"
        placeholder={placeholder}
        {...field}
      />
      {children !== undefined ? <div className="icon">{children}</div> : null}
      <p className="text-base text-red-500">{error !== undefined ? error?.message : ''}</p>
    </>
  )
}

export default Input
