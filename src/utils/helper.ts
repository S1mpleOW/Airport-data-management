import { parse } from 'date-fns'

const formatCurrencies = (value: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  })
  return formatter.format(value)
}

const formatDate = (value: string, formatType: string = 'dd/MM/yyyy'): string => {
  return parse(value, formatType, new Date()).toLocaleDateString()
}

const formatTime = (value: string, formatType: string = 'HH:mm'): string => {
  return parse(value, formatType, new Date()).toLocaleTimeString()
}

export { formatCurrencies, formatDate, formatTime }
