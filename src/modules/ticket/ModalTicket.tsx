/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
import ModalUpdate from '@components/modal/ModalUpdate'
import ModalUpdateChild from '@components/modal/_ModalUpdateChild'
import { RootState } from '@store/store'
import { CATEGORY_API, configHeaders, CUSTOMER_API, FLIGHT_API, TICKET_API } from '@utils/constant'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data, ICustomer, IFlight, ITicketType, schema } from './ticket.interface'

interface IModalTicketProps {
  title: string
  id: number | string
}

const ModalTicket: React.FunctionComponent<IModalTicketProps> = ({ title, id }) => {
  const [customers, setCustomers] = React.useState([])
  const [ticketTypes, setTicketTypes] = React.useState([])
  const [flights, setFlights] = React.useState([])
  const { accessToken } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  React.useEffect(() => {
    void (async () => {
      await Promise.all([
        fetch(CUSTOMER_API, configHeaders(accessToken)),
        fetch(FLIGHT_API, configHeaders(accessToken)),
        fetch(CATEGORY_API, configHeaders(accessToken)),
      ])
        .then(
          async (responses) =>
            await Promise.all(
              responses.map(async (res) => {
                return await res.json()
              })
            )
        )
        .then((res) => {
          setCustomers(
            res[0].map((customer: ICustomer) => ({
              id: customer.customerID,
              value: customer.customerName,
            }))
          )
          setFlights(
            res[1].map((flight: IFlight) => ({
              id: flight.flightID,
              value: flight.flightID,
            }))
          )
          setTicketTypes(
            res[2].map((ticketType: ITicketType) => ({
              id: ticketType.ticketTypeID,
              value: ticketType.ticketTypeName,
            }))
          )
        })
    })()
  }, [accessToken, dispatch])

  const formatData = React.useMemo(() => {
    return data.map((item) => {
      if (item.name === 'customer') {
        return {
          ...item,
          options: customers,
        }
      }
      if (item.name === 'flight') {
        return {
          ...item,
          options: flights,
        }
      }
      if (item.name === 'ticketType') {
        return {
          ...item,
          options: ticketTypes,
        }
      }
      return item
    })
  }, [customers, flights, ticketTypes])

  return (
    <ModalUpdate title={title}>
      <ModalUpdateChild schema={schema} data={formatData} id={id} url={TICKET_API} />
    </ModalUpdate>
  )
}

export default ModalTicket
