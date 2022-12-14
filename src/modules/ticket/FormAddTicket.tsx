import Button from '@components/button/Button'
import DashboardHeading from '@modules/dashboard/DashboardHeading'
import PageAddNew from '@modules/page/PageAddNew'
import { RootState } from '@store/store'
import { CATEGORY_API, configHeaders, CUSTOMER_API, FLIGHT_API, TICKET_API } from '@utils/constant'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { data, ICustomer, IFlight, schema, ITicketType } from './ticket.interface'

const FormAddTicket: React.FunctionComponent = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const navigate = useNavigate()
  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading title="Ticket" subtitle="Add new ticket">
        <Button type="button" onClick={() => navigate('/ticket')}>
          Back
        </Button>
      </DashboardHeading>
      <PageAddNew data={formatData} schema={schema} url={TICKET_API} />
    </div>
  )
}

export default FormAddTicket
