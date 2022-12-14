import { INotificationOptions } from '@customTypes/index'
import { toast } from 'react-toastify'

type ReturnHookType = (message: string, options: INotificationOptions) => void

const useNotification = (): [ReturnHookType] => {
  const notify = (
    message: string,
    {
      variant = 'success',
      position = 'top-right',
      autoClose = 3000,
      ...options
    }: INotificationOptions
  ): void => {
    toast[variant](message, {
      position,
      autoClose,
      ...options,
    })
  }

  return [notify]
}

export default useNotification
