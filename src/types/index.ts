interface INotificationOptions {
  variant: 'success' | 'warning' | 'error' | 'info'
  position?: 'top-right'
  autoClose?: number
  hideProgressBar?: boolean
  closeOnClick?: boolean
  pauseOnHover?: boolean
  draggable?: boolean
  progress?: number
  theme?: 'dark' | 'light'
}

interface INotificationService {
  message: string
  options: INotificationOptions
}

interface IOptions {
  id: string
  value: string
}

interface IItemValues {
  name: string
  type: string
  placeholder: string
  label: string
  defaultValue: string | number | boolean | Object
  key: string
  options?: IOptions[]
}

export type { INotificationService, IItemValues, INotificationOptions }
