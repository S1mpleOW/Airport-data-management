import * as yup from 'yup'

export interface ICategoryResponse {
  ticketTypeID: string
  ticketTypeName: string
  ticketTypePrice: number
  serviceFee: number
}

export const schema = yup.object().shape({
  ticketTypeName: yup.string().required('Ticket type name is required'),
  ticketTypePrice: yup
    .number()
    .typeError('Price must be a number')
    .required('Ticket type price is required'),
  serviceFee: yup
    .number()
    .typeError('Service fee must be a number')
    .required('Service fee is required'),
})

export const data = [
  {
    name: 'ticketTypeName',
    type: 'text',
    placeholder: 'Type ticket type name',
    label: 'Ticket Type Name',
    key: 'ticketTypeName',
    defaultValue: '',
  },
  {
    name: 'ticketTypePrice',
    type: 'number',
    placeholder: 'Type ticket type price',
    label: 'Ticket Type Price',
    key: 'ticketTypePrice',
    defaultValue: '',
  },
  {
    name: 'serviceFee',
    type: 'number',
    placeholder: 'Type service fee',
    label: 'Service Fee',
    key: 'serviceFee',
    defaultValue: '',
  },
]
