import * as yup from 'yup'

export interface IAirport {
  airportID: string
  airportLocation: string
  airportName: string
}

export const schema = yup.object().shape({
  airportLocation: yup.string().required('Airport Location is required'),
  airportName: yup.string().required('Airport Name is required'),
})

export const data = [
  {
    name: 'airportLocation',
    label: 'Airport Location',
    type: 'text',
    defaultValue: '',
    key: 'airportLocation',
    placeholder: 'Airport Location',
  },
  {
    name: 'airportName',
    label: 'Airport Name',
    type: 'text',
    defaultValue: '',
    key: 'airportName',
    placeholder: 'Airport Name',
  },
]
