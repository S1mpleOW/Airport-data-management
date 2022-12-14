import Button from '@components/button/Button'
import { IAirport } from '@modules/airport/airport.interface'
import DashboardHeading from '@modules/dashboard/DashboardHeading'
import PageAddNew from '@modules/page/PageAddNew'
import { RootState } from '@store/store'
import { AIRPORT_API, configHeaders, FLIGHT_API } from '@utils/constant'
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { data, schema } from './fight.interface'

const FormAddFlight: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [airports, setAirports] = React.useState([])
  const { accessToken } = useSelector((state: RootState) => state.user)
  React.useEffect(() => {
    void (async () => {
      await fetch(AIRPORT_API, configHeaders(accessToken))
        .then(async (res) => await res.json())
        .then((res) => {
          setAirports(
            res.map((airport: IAirport) => ({
              id: airport.airportID,
              value: airport.airportID,
            }))
          )
        })
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken, dispatch])

  const formatData = React.useMemo(() => {
    return data.map((item) => {
      if (item.type === 'select') {
        return {
          ...item,
          options: airports,
        }
      }
      return item
    })
  }, [airports])

  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading title="Ticket" subtitle="Add new ticket">
        <Button type="button" onClick={() => navigate('/flight')}>
          Back
        </Button>
      </DashboardHeading>
      <PageAddNew data={formatData} schema={schema} url={FLIGHT_API} />
    </div>
  )
}

export default FormAddFlight
