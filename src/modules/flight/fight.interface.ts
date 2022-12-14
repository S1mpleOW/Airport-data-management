import { IAirport } from '@modules/airport/airport.interface'
import { format } from 'date-fns'
import * as yup from 'yup'

export interface IFlightResponse {
  arriveAirport: IAirport
  departureAirport: IAirport
  departureDate: string
  departureTime: string
  flightID: string
  numberOfSeat: number
}

export const data = [
  {
    name: 'numberOfSeat',
    type: 'number',
    placeholder: 'Type number of seat',
    label: 'Number of seat',
    key: 'numberOfSeat',
    defaultValue: 0,
  },
  {
    name: 'departureTime',
    type: 'time',
    placeholder: 'Type departure time',
    label: 'Departure Time',
    key: 'departureTime',
    defaultValue: format(new Date(), 'HH:mm'),
  },
  {
    name: 'departureDate',
    type: 'date',
    placeholder: 'Type departure date',
    label: 'Departure Date',
    key: 'departureDate',
    defaultValue: '',
  },
  {
    name: 'departureAirport',
    type: 'select',
    placeholder: 'Please select a departure airport',
    label: 'Departure Airport',
    defaultValue: '',
    key: 'airportID',
    options: [],
  },
  {
    name: 'arriveAirport',
    type: 'select',
    placeholder: 'Please select a arrive airport',
    label: 'Arrive Airport',
    defaultValue: '',
    key: 'airportID',
    options: [],
  },
]

export const schema = yup.object().shape({
  numberOfSeat: yup
    .number()
    .typeError('Number of seats must be a number')
    .required('Number of seats is required'),
  departureTime: yup.string().required('Departure time is required'),
  departureDate: yup.string().required('Departure date is required'),
  departureAirport: yup.string().required('Departure airport is required'),
  arriveAirport: yup.string().required('Arrive airport is required'),
})
