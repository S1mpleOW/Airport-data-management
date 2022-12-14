import * as yup from 'yup'

export interface ICustomerResponse {
  customerCMND: string
  customerName: string
  customerID: string
  customerPhone: string
}

export const data = [
  {
    name: 'customerName',
    label: 'Customer Name',
    type: 'text',
    placeholder: 'Enter customer name',
    key: 'customerName',
    defaultValue: '',
  },
  {
    name: 'customerCMND',
    label: 'Customer identification number',
    type: 'text',
    placeholder: 'Enter customer identification number',
    key: 'customerCMND',
    defaultValue: '',
  },
  {
    name: 'customerPhone',
    label: 'Customer phone number',
    type: 'text',
    placeholder: 'Enter customer phone number',
    key: 'customerPhone',
    defaultValue: '',
  },
]

export const schema = yup.object().shape({
  customerName: yup.string().required('Customer name is required'),
  customerCMND: yup
    .string()
    .required('Customer identification number is required')
    .length(10, 'CMND must be 10 digits'),
  customerPhone: yup
    .string()
    .required('Customer phone number is required')
    .length(10, 'Phone number must be 10 digits'),
})
