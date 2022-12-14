import * as yup from 'yup'

export interface ITicketItem {
  id: number | string
  bookingDate: string
  receiptDate: string
}

export interface ITicketType {
  serviceFee: number
  ticketTypeName: string
  ticketTypeID: string
}

export interface ICustomer {
  customerCMND: string
  customerName: string
  customerID: string
  customerPhone: string
}

export interface IFlight {
  flightID: string
  departureDate: string
  departureTime: string
  flightName: string
}

export interface ITicketResponse {
  bookingDate: string
  receiptDate: string
  ticketNumber: string
  ticketType: ITicketType
  customer: ICustomer
  flight: IFlight
}

export const schema = yup.object().shape({
  bookingDate: yup.string().required('Booking date is required'),
  receiptDate: yup.string().required('Receipt date is required'),
  customer: yup.string().required('Customer is required'),
  flight: yup.string().required('Flight is required'),
  ticketType: yup.string().required('Ticket type is required'),
})

export const data = [
  {
    name: 'bookingDate',
    type: 'date',
    placeholder: 'Type booking date',
    label: 'Booking Date',
    key: 'bookingDate',
    defaultValue: '',
  },
  {
    name: 'receiptDate',
    type: 'date',
    placeholder: 'Type receipt date',
    label: 'Receipt Date',
    key: 'receiptDate',
    defaultValue: '',
  },
  {
    name: 'customer',
    type: 'select',
    placeholder: 'Please select a customer',
    label: 'Customer',
    defaultValue: '',
    key: 'customerID',
    options: [],
  },
  {
    name: 'flight',
    type: 'select',
    placeholder: 'Please select a flight',
    label: 'Flight',
    defaultValue: '',
    key: 'flightID',
    options: [],
  },
  {
    name: 'ticketType',
    type: 'select',
    placeholder: 'Please select a ticket type',
    label: 'Ticket Type',
    defaultValue: '',
    key: 'ticketTypeID',
    options: [],
  },
]
